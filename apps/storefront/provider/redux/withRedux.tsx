import { Component as HeadlessComponent } from 'react'
import { initRedux } from './initRedux'

export const withRedux = (App: any) => {
  return class AppWithRedux extends HeadlessComponent {
    private reduxStore: any

    static async getInitialProps(appContext: any) {
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      const reduxStore = initRedux()
      // Provide the store to getInitialProps of pages
      appContext.ctx.reduxStore = reduxStore

      let appProps = {}
      if (typeof App.getInitialProps === 'function') {
        appProps = await App.getInitialProps(appContext)
      }

      return {
        ...appProps,
        reduxState: reduxStore.getState()
      }
    }

    constructor(props: any) {
      super(props)
      this.reduxStore = initRedux(props.reduxState)
    }

    render() {
      return <App reduxStore={this.reduxStore} {...this.props} />
    }
  }
}
