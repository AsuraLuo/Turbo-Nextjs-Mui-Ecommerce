import { FC } from 'react'

interface AppleImage {
  media?: string
  url?: string
}

export interface INextHeadProps {
  title?: string
  description?: string
  themeColor?: string
  applicationColor?: string
  touchIcon?: string
  twitterImage?: string
  ogImage?: string
  startupImages?: Array<AppleImage>
}

const INextHead: FC<INextHeadProps> = ({
  title = 'React PWA',
  description = 'React PWA App in the world',
  themeColor = '#FFFFFF',
  applicationColor = '#2B5797',
  touchIcon = 'images/icons/apple-touch-icon.png',
  twitterImage = 'images/icons/icon-192x192.png',
  ogImage = 'images/icons/icon-72x72.png',
  startupImages = [
    {
      media: 'images/splash/launch-640x1136.png',
      url: '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
    },
    {
      media: 'images/splash/launch-750x1294.png',
      url: '(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
    },
    {
      media: 'images/splash/launch-1242x2148.png',
      url: '(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"'
    },
    {
      media: 'images/splash/launch-1125x2436.png',
      url: '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'
    },
    {
      media: 'images/splash/launch-1536x2048.png',
      url: '(min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)'
    },
    {
      media: 'images/splash/launch-1668x2224.png',
      url: '(min-device-width: 834px) and (max-device-width: 834px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)'
    },
    {
      media: 'images/splash/launch-2048x2732.png',
      url: '(min-device-width: 1024px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)'
    }
  ]
}) => {
  return (
    <>
      <meta name="application-name" content={title} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={title} />
      <meta name="description" content={description} />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-config" content="" />
      <meta name="msapplication-TileColor" content={applicationColor} />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="theme-color" content={themeColor} />
      {/* socail share  */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content={process.env.REACT_APP_SITE_URL} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content={`${process.env.REACT_APP_SITE_URL}/${twitterImage}`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={title} />
      <meta property="og:url" content={process.env.REACT_APP_SITE_URL} />
      <meta
        property="og:image"
        content={`${process.env.REACT_APP_SITE_URL}/${ogImage}`}
      />
      <link rel="apple-touch-icon" sizes="180x180" href={touchIcon} />
      <link rel="manifest" href="/manifest.json" />
      {/* apple splash screen images  */}
      {startupImages.length > 0 && (
        <>
          {startupImages.map((image: AppleImage) => {
            return (
              <link
                rel="apple-touch-startup-image"
                key={image.media}
                href={image.url}
                media={image.media}
              />
            )
          })}
        </>
      )}
    </>
  )
}

export default INextHead
