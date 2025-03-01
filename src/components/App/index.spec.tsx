import { render, waitForDomChange } from '@testing-library/react'
import { stringify } from 'bcp-47'
import { Schema } from 'bcp-47/lib/stringify'
import { List, Map } from 'immutable'
import { Provider as ServiceProvider } from 'inversify-react'
import { SnackbarProvider } from 'notistack'
import React from 'react'
import { DndProvider } from 'react-dnd'
import { TestBackend } from 'react-dnd-test-backend'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router'
import { RecoilRoot } from 'recoil'
import createMockStore from 'redux-mock-store'

import { shouldBePresent } from '~/asserters/commonAsserters'
import IntlProvider from '~/components/IntlProvider'
import ThemeProvider from '~/components/ThemeProvider'
import inversifyContainer from '~/container.dev'
import useScreen from '~/hooks/useScreen'
import { State } from '~/redux'
import typed from '~/typed'
import { asFormats } from '~/validators/intlValidators'
import App from '.'

import formats from '../../../public/formats/en.json'
import messages from '../../../public/messages/en.json'

jest.mock('bcp-47', () => ({ stringify: jest.fn() })) // FIXME: Delete the mock
jest.mock('~/hooks/useScreen', () => jest.fn())

const stringifyMocked = stringify as jest.MockedFunction<typeof stringify>
const useScreenMocked = useScreen as jest.MockedFunction<typeof useScreen>

// TODO: remove?
// NOTE: connected-react-router ではないので router state は不要。
const store = createMockStore<Alt.Omit<State, 'router'>>()({
  chess: {
    board: {
      chessmen: Map(),
    },
  },
  counter: {
    count: 0,
  },
  io: {
    now: new Date('2019-07-27'),
  },
  localeSelector: {
    locale: 'en',
    formats: asFormats(formats),
    messages,
    errors: List(),
  },
  reminder: {
    tasks: List(),
    errors: Map(),
  },
  userAuthn: {},
})

describe.each`
location
${ '/' }
${ '/form-controls' }
${ '/table' }
${ '/chat' }
${ '/chess' }
${ '/clock' }
${ '/counter' }
${ '/image-data-url-en-decoder' }
${ '/info' }
${ '/paint' }
${ '/qr-code-tools' }
${ '/reminder' }
${ '/settings' }
${ '/nonexistent-path' }
`('App', ({ location }: { location: string }) => {
  beforeAll(() => {
    stringifyMocked.mockImplementation((schema?: Schema) => `${ schema?.language }-${ schema?.region }`)
    useScreenMocked.mockImplementation(() => ({ width: 1366, height: 768, dpr: 1 }))
  })

  beforeAll(() => {
    shouldBePresent(process.env['SHEETS_API_URL'])
    shouldBePresent(process.env['GOOGLE_SHEETS_FOSS_COMPARISON_TABLE_SHEET_ID'])
    shouldBePresent(process.env['GOOGLE_SHEETS_FOSS_COMPARISON_TABLE_SHEET_SHEET_NAME'])

    const getSpreadsheetUrl = `${ process.env['SHEETS_API_URL'] }/spreadsheets/${ process.env['GOOGLE_SHEETS_FOSS_COMPARISON_TABLE_SHEET_ID'] }`
    const getSpreadsheetValuesUrl = `${ process.env['SHEETS_API_URL'] }/spreadsheets/${ process.env['GOOGLE_SHEETS_FOSS_COMPARISON_TABLE_SHEET_ID'] }/values/${ encodeURIComponent(process.env['GOOGLE_SHEETS_FOSS_COMPARISON_TABLE_SHEET_SHEET_NAME']) }`

    fetchMock.resetMocks()

    fetchMock.doMock(async (request) => {
      if (request.url.startsWith(`${ getSpreadsheetUrl }?`)) {
        return JSON.stringify({
          properties: {
            locale: 'en_US',
          },
          sheets: [{
            data: [{
              columnMetadata: [
                {
                  pixelSize: 100,
                },
                {
                  pixelSize: 100,
                },
              ],
            }],
          }],
        })
      }

      if (request.url.startsWith(`${ getSpreadsheetValuesUrl }?`)) {
        return JSON.stringify({
          range: 'Sheet1!A1:Z1000',
          majorDimension: 'ROWS',
          values: [
            ['6 * 9', 42],
          ],
        })
      }

      throw new Error
    })
  })

  test(typed<[string]>`at ${ location }`, async () => {
    const context = {}

    const { container } = render(
      <RecoilRoot>
        <Provider store={ store }>
          <IntlProvider availableLocales={ ['en', 'he', 'ja'] }>
            <DndProvider backend={ TestBackend }>
              <StaticRouter context={ context } location={ location }>
                <ServiceProvider container={ inversifyContainer }>
                  <SnackbarProvider>
                    <ThemeProvider defaultDark={ false }>
                      <App />
                    </ThemeProvider>
                  </SnackbarProvider>
                </ServiceProvider>
              </StaticRouter>
            </DndProvider>
          </IntlProvider>
        </Provider>
      </RecoilRoot>
    )

    await waitForDomChange({ container, timeout: 15000 })

    expect(container).toMatchSnapshot()
  })
})
