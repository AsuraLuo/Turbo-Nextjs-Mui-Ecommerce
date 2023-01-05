import { createSlice, Slice } from '@reduxjs/toolkit'

interface I18nSliceState {
  locale: string | null
  messages: object | null
  defaultMessage: object | null
}

const initialState: I18nSliceState = {
  locale: null,
  messages: null,
  defaultMessage: null
}

export const slice: Slice = createSlice({
  name: 'i18n',
  initialState,
  reducers: {
    setMessages: (state: I18nSliceState, { payload }) => {
      const { locale, messages, defaultMessage } = payload
      state.locale = locale
      state.messages = messages
      state.defaultMessage = defaultMessage
    },
    setInitialState: () => initialState
  }
})
