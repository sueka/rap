import * as React from 'react'
import { MemoryRouter } from 'react-router'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import { StoryDecorator } from '@storybook/react'
import { DragDropContextProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import { IntlProvider } from 'react-intl'

import { rootSaga, configureStore } from '../redux'
import * as en from '../../public/locales/en.json'

export const withProvider: StoryDecorator = (story) => {
  const history = createBrowserHistory()
  const { store, sagaMiddleware } = configureStore(history)

  sagaMiddleware.run(rootSaga)

  return (
    <Provider { ...{ store } }>
      { story() }
    </Provider>
  )
}

export const withMemoryRouter: StoryDecorator = (story) => (
  <MemoryRouter>
    { story() }
  </MemoryRouter>
)

export const withDragDropContextProvider: StoryDecorator = (story) => (
  <DragDropContextProvider backend={ HTML5Backend }>
    { story() }
  </DragDropContextProvider>
)

const messages = {
  en,
}

export const withIntlProvider: StoryDecorator = (story) => (
  <IntlProvider locale="en" messages={ messages.en }>
    { story() }
  </IntlProvider>
)
