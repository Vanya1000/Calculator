import { configureStore } from '@reduxjs/toolkit'

import settingsSlice from './slice/settingsSlice'

export const store = configureStore({
  reducer: {
    settings: settingsSlice,
  },
})