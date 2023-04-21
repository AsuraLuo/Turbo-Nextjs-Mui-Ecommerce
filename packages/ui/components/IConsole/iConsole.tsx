import Script from 'next/script'

declare global {
  interface Window {
    VConsole: any
  }
}

const IConsole = () => {
  return (
    <Script
      src="https://unpkg.com/vconsole@latest/dist/vconsole.min.js"
      strategy="lazyOnload"
      onLoad={() => {
        // VConsole will be exported to `window.VConsole` by default.
        const VConsole = new window.VConsole()
        console.info(VConsole)
      }}
    />
  )
}

export default IConsole
