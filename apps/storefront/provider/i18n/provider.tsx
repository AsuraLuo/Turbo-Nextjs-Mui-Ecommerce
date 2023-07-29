import { IntlProvider } from 'react-intl'
import { connect } from 'react-redux'

import { WebsiteConf } from '@config/website'

const I18nContextProvider = ({ children, i18nState, ...props }: any) => {
  const locale: string = i18nState?.locale ?? WebsiteConf.i18n.locale
  const messages = i18nState.messages ?? {}
  const language = locale.replace(/\_/g, '-')

  const onIntlError = (error: any) => {
    if (messages) {
      if (error.code === 'MISSING_TRANSLATION') {
        console.warn('Missing translation', error.message)
        return
      }

      throw error
    }
  }

  return (
    <IntlProvider
      key={language}
      defaultLocale={language}
      locale={language}
      messages={messages}
      onError={onIntlError}
      {...props}
    >
      {children}
    </IntlProvider>
  )
}

const mapStateToProps = ({ i18n }: any) => ({
  i18nState: i18n
})

export default connect(mapStateToProps)(I18nContextProvider)
