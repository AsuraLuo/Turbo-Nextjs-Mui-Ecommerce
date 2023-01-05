import { useEffect } from 'react'
import { IntlProvider } from 'react-intl'
import { connect } from 'react-redux'
import { parseCookies, setCookie } from 'nookies'

import { WebsiteConf } from '@config/website'

const LocaleContextProvider = ({ children, i18nState, ...props }: any) => {
  const locale: string = i18nState?.locale ?? WebsiteConf.i18n.locale
  const messages = i18nState.messages ?? {}
  const language = locale.replace(/_/, '-')

  const onIntlError = (error: any) => {
    if (messages) {
      if (error.code === 'MISSING_TRANSLATION') {
        console.warn('Missing translation', error.message)
        return
      }

      throw error
    }
  }

  useEffect(() => {
    const cookies = parseCookies()
    const cache: string = cookies?.locale_code ?? ''

    if (!cache)
      setCookie(null, 'locale_code', locale, {
        maxAge: 24 * 60 * 60,
        path: '/'
      })
  }, [locale])

  return (
    <IntlProvider
      key={language}
      defaultLocale={language}
      locale={language}
      messages={messages}
      {...props}
      onError={onIntlError}
    >
      {children}
    </IntlProvider>
  )
}

const mapStateToProps = ({ i18n }: any) => ({
  i18nState: i18n
})

export default connect(mapStateToProps)(LocaleContextProvider)
