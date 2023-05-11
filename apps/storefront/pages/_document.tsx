import Document, { Html, Head, Main, NextScript } from 'next/document'
import { Children } from 'react'
import { ServerStyleSheets } from '@mui/styles'
import createEmotionServer from '@emotion/server/create-instance'

import { createEmotionCache } from '@ocommerce/hooks'
import { INextHead, IGoogleWebCache } from '@ocommerce/ui'

class HeadlessDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <INextHead />
          <meta name="emotion-insertion-point" content="" />
          {/* Inject MUI styles first to match with the prepend: true configuration. */}
          {(this.props as any).emotionStyleTags}
        </Head>
        <body>
          <script
            id="__html_font_size__"
            dangerouslySetInnerHTML={{
              __html: `
              !(function (e) {
                var t = e.document,
                  n = t.documentElement,
                  a = 'orientationchange' in e ? 'orientationchange' : 'resize',
                  d = function () {
                    var e = n.getBoundingClientRect().width || 1200;
                    e <= 1200 ? (n.style.fontSize = e / 7.5 + 'px') : (n.style.fontSize = e / 19.2 + 'px');
                  };
                if (t.readyState === 'loading') d();
                document.documentElement.addEventListener("touchmove",
                function(event) {
                  if (event.touches.length > 1) event.preventDefault()
                },
                false);
                t.addEventListener &&
                  (e.addEventListener(a, d, !1),
                  'interactive' === t.readyState ||
                    t.addEventListener(
                      'DOMContentLoaded',
                      function () {
                        setTimeout(d);
                      },
                      !1
                    ));
              })(window);
              `
            }}
          />
          <Main />
          <NextScript />
          <IGoogleWebCache />
        </body>
      </Html>
    )
  }
}

// It's compatible with static-site generation (SSG).
HeadlessDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  const originalRenderPage = ctx.renderPage

  // You can consider sharing the same emotion cache between all the SSR requests to speed up performance.
  // However, be aware that it can have global side effects.
  const cache = createEmotionCache({ remSize: 100 })
  const { extractCriticalToChunks } = createEmotionServer(cache)
  const jssSheets = new ServerStyleSheets()

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: any) =>
        function EnhanceApp(props) {
          return jssSheets.collect(<App emotionCache={cache} {...props} />)
        }
    })

  const initialProps = await Document.getInitialProps(ctx)

  // Generate style tags for the styles coming from Emotion
  // This is important. It prevents Emotion from rendering invalid HTML.
  // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
  const emotionStyles = extractCriticalToChunks(initialProps.html)
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ))

  // Generate the css string for the styles coming from jss
  const css = jssSheets.toString()

  return {
    ...initialProps,
    styles: [
      ...emotionStyleTags,
      <style
        id="jss-server-side"
        key="jss-server-side"
        dangerouslySetInnerHTML={{ __html: css }}
      />,
      ...Children.toArray(initialProps.styles)
    ]
  }
}

export default HeadlessDocument
