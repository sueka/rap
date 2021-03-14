import React, { useMemo } from 'react'
import Helmet from 'react-helmet'
import { IntlConfig, IntlProvider as OriginalIntlProvider } from 'react-intl'
import { connect } from 'react-redux'

import IntlProviderContext from '~/lib/contexts/IntlProviderContext'
import { Tag } from '~/lib/languageNameSolver'
import { State } from '~/redux'

type DefaultIntlConfig = Pick<IntlConfig, 'formats' | 'messages' | 'timeZone' | 'textComponent' | 'defaultLocale' | 'defaultFormats' | 'onError'>

type OriginalIntlProviderProps = Alt.Omit<IntlConfig, keyof DefaultIntlConfig> & Partial<DefaultIntlConfig>

interface OwnProps extends Alt.Omit<OriginalIntlProviderProps, 'locale' | 'formats' | 'messages'> {
  availableLocales: Tag[]
}

type StateProps = Pick<OriginalIntlProviderProps, 'locale' | 'formats' | 'messages'>

type Props =
  & OwnProps
  & StateProps

export /* for testing */ const IntlProvider: React.FC<Props> = ({ availableLocales, ...props }) => {
  const dir = useMemo(() => props.locale === 'he' ? 'rtl' : 'ltr', [props.locale]) // TODO: RtL の判定方法を修正する

  // NOTE: <bdi> は Internet Explorer で動作しないが、翻訳はフォールバックされることがあるので、翻訳の書字方向をロケールから計算することはできない。
  return (
    <>
      <Helmet htmlAttributes={ { dir } } />
      <IntlProviderContext.Provider value={ { availableLocales, dir } }>
        <OriginalIntlProvider textComponent="bdi" { ...props } />
      </IntlProviderContext.Provider>
    </>
  )
}

const mapStateToProps = ({ localeSelector: { locale, formats, messages } }: State, {}: React.PropsWithChildren<OwnProps>): StateProps => ({
  locale,
  formats,
  messages,
})

export default connect(mapStateToProps)(IntlProvider)
