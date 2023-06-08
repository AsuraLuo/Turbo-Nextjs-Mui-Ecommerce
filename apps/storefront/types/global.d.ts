interface Window {
  $: any
  __REACT_REDUX_STORE__: any
  BASE_URL: string | undefined
  dataLayer: any
  snackbar: any
  google: {
    maps: any
  }
  initMap: () => void
}

declare function escape(s: string): string
declare function unescape(s: string): string
