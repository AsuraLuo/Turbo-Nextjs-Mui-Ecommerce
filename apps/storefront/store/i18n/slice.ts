import { createSlice, Slice } from '@reduxjs/toolkit'

export const slice: Slice = createSlice({
  name: 'i18n',
  initialState: {
    i18n: null,
    locase: null
  },
  reducers: {
    setLanguages: (state: any, { payload }) => {
      state.i18n = payload
    }
  }
})
