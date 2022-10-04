import { configureStore } from '@reduxjs/toolkit'

import calculatorSlice from './slice/calculatorSlice'
import settingsSlice from './slice/settingsSlice'

export const store = configureStore({
  reducer: {
    settings: settingsSlice,
    calculator: calculatorSlice,
  },
})