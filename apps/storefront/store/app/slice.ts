import { createSlice, Slice } from '@reduxjs/toolkit'

export const slice: Slice = createSlice({
  name: 'app',
  initialState: {
    currency: null,
    loading: false,
    storeConfig: null
  },
  reducers: {
    setAppConfig: (state: any, { payload }) => {
      const { currency, storeConfig } = payload
      state.currency = currency
      state.storeConfig = storeConfig
    },
    setLoading: (state: any, { payload }) => {
      state.loading = payload
    }
  }
})
