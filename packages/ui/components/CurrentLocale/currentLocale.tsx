import { Component } from 'react'
import { injectIntl } from 'react-intl'

class Locale extends Component {
  static instance: any = null

  constructor(props: any) {
    super(props)
    if (!Locale.instance) Locale.instance = this
  }

  render() {
    return false
  }
}

export default injectIntl(Locale)

export const intl = () => {
  return Locale.instance?.props.intl
}

export const formatMessage = (...args: any[]) => {
  return intl().formatMessage(...args)
  return {}
}
