import { reducer as appReducer } from './app'
import { reducer as i18nReducer } from './i18n'

const headlessReducer = {
  app: appReducer,
  i18n: i18nReducer
}

export default headlessReducer
