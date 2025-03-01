import { List } from 'immutable'
import { call } from 'redux-saga/effects'

import container from '~/container.dev'
import fetch from '~/fetch'
import prsg from '~/prsg'
import typed from '~/typed'
import LocaleSelectorService, { LocaleSelectorState, PUSH_ERROR, SELECT_LOCALE, SET_FORMATS, SET_LOCALE, SET_MESSAGES, createLocaleSelectorReducer, pushError, selectLocale, setFormats, setLocale, setMessages } from './localeSelector'

describe('action creators', () => {
  describe('selectLocale', () => {
    it('should return a select locale action', () => {
      expect(selectLocale('ja')).toEqual({
        type: SELECT_LOCALE,
        payload: {
          locale: 'ja',
        },
      })
    })
  })

  describe('setLocale', () => {
    it('should return a set locale action', () => {
      expect(setLocale('ja')).toEqual({
        type: SET_LOCALE,
        payload: {
          locale: 'ja',
        },
      })
    })
  })

  describe('setFormats', () => {
    it('should return a set formats action', () => {
      expect(setFormats({ date: { short: { month: 'short', day: 'numeric' } } })).toEqual({
        type: SET_FORMATS,
        payload: {
          formats: { date: { short: { month: 'short', day: 'numeric' } } },
        },
      })
    })
  })

  describe('setMessages', () => {
    it('should return a set messages action', () => {
      expect(setMessages({ blue: '青' })).toEqual({
        type: SET_MESSAGES,
        payload: {
          messages: { blue: '青' },
        },
      })
    })
  })

  describe('pushError', () => {
    it('should return a push error action', () => {
      expect(pushError(new Error('unavailable locale'))).toEqual({
        type: PUSH_ERROR,
        payload: {
          error: new Error('unavailable locale'),
        },
      })
    })
  })
})

describe('LocaleSelectorService', () => {
  const localeSelectorService = container.resolve(LocaleSelectorService)

  describe('selectLocaleSaga', () => {
    const it = localeSelectorService.selectLocaleSaga(selectLocale('ja'))

    if (process.env['BASE_NAME'] === undefined) {
      throw new Error // FIXME: describe を落とすだけでいいかも
    }

    const formatsResponse = new Response
    const messagesResponse = new Response

    expect(it.next().value).toEqual(call(fetch, typed<[string]>`${ process.env['BASE_NAME'] }/formats/ja.json`))
    expect(it.next(formatsResponse).value).toEqual(call([formatsResponse, formatsResponse.json]))
    expect(it.next().value).toEqual(call(fetch, typed<[string]>`${ process.env['BASE_NAME'] }/messages/ja.json`))
    expect(it.next(messagesResponse).value).toEqual(call([messagesResponse, messagesResponse.json]))
  })
})

describe('reducer', () => {
  const initialState: LocaleSelectorState = {
    locale: 'en',
    formats: {},
    messages: {},
    errors: List(),
  }

  const localeSelectorReducer = createLocaleSelectorReducer(initialState)

  it('should pass assertReducerShape', () => {
    expect(localeSelectorReducer(undefined, {
      type: typed<[string]>`@@rap/localeSelector.spec/${ prsg() }`,
    })).toEqual(initialState)
  })

  it('should handle SELECT_LOCALE', () => {
    expect(localeSelectorReducer(initialState, selectLocale('ja'))).toEqual(initialState)
  })

  it('should handle SET_LOCALE', () => {
    expect(localeSelectorReducer(initialState, setLocale('ja'))).toEqual({
      ...initialState,
      locale: 'ja',
    })
  })

  it('should handle SET_FORMATS', () => {
    expect(localeSelectorReducer(initialState, setFormats({ date: { short: { month: 'short', day: 'numeric' } } }))).toEqual({
      ...initialState,
      formats: { date: { short: { month: 'short', day: 'numeric' } } },
    })
  })

  it('should handle SET_MESSAGES', () => {
    expect(localeSelectorReducer(initialState, setMessages({ blue: '青' }))).toEqual({
      ...initialState,
      messages: { blue: '青' },
    })
  })

  it('should handle PUSH_ERROR', () => {
    const error = new Error
    const state = localeSelectorReducer(initialState, pushError(error))

    expect(state).toMatchObject({
      ...initialState,
      errors: initialState.errors.push(expect.any(Error)),
    })

    expect(state.errors).toContain(error)
  })
})
