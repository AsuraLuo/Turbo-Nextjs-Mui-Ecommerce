import Head from 'next/head'
import { AppProps } from 'next/app'
import { Provider as ReduxProvider } from 'react-redux'
import { SnackbarProvider } from 'notistack'
import { EmotionCache } from '@emotion/react'
import { isEmpty } from 'lodash-es'

import { IConsole } from '@ocommerce/ui'
import { createEmotionCache } from '@ocommerce/hooks'
import { withRedux, I18nContextProvider } from '@provider/index'
import { fetchApp } from '@hooks/App'

import AppShell from '@components/AppShell'

interface InitialPage {
  Component: any
  ctx: any
}

interface HeadlessProps extends AppProps {
  emotionCache?: EmotionCache
  reduxStore?: any
}

// Client-side cache, shared for the whole session of the user in the browser.
const clientEmotionCache = createEmotionCache()
const isProd: boolean = process.env.NODE_ENV === 'production'

const App = ({
  Component,
  emotionCache = clientEmotionCache,
  pageProps,
  reduxStore
}: HeadlessProps) => {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="INDEX,FOLLOW" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="Ocommerce" />
        <meta name="format-detection" content="telephone=no, email=no" />
        <meta name="application-name" content="Ocommerce" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Ocommerce" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-tap-highlight" content="no" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="dns-prefetch" href={process.env.API_URL} />
        <link rel="preconnect" href={process.env.API_URL} />
      </Head>
      <ReduxProvider store={reduxStore}>
        <SnackbarProvider
          maxSnack={3}
          autoHideDuration={5000}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <I18nContextProvider>
            <AppShell cache={emotionCache}>
              <Component {...pageProps} />
            </AppShell>
          </I18nContextProvider>
        </SnackbarProvider>
      </ReduxProvider>
      {!isProd && <IConsole />}
    </>
  )
}

App.getInitialProps = async ({ Component, ctx }: InitialPage) => {
  const { reduxStore } = ctx
  const state = reduxStore.getState()

  if (isEmpty(state.i18n.languages)) await fetchApp(ctx)

  const pageProps = Component.getInitialProps ? await Component.getInitialProps({ ...ctx }) : {}

  return { pageProps }
}

export default withRedux(App)
