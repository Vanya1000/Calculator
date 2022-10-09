import { createSlice } from '@reduxjs/toolkit'
import { calculateExpression, checkValue, validateInput } from '@/utils/auxiliaryFn/auxiliaryFn'

const initialState = {
  display: '',
  history: [],
  isShouldClear: false,
  isError: false,
}

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    setDisplay: (state, action) => {
      const payload = String(action.payload)
      if (state.display.length < 40 && validateInput(state.display, payload)) {
        if (state.isShouldClear) {
          state.display = ''
          state.isShouldClear = false
        }
        if (state.display === '' || state.isOperatorClicked) {
          state.display = payload
        } else {
          state.display += payload
        }
      } 
    },
    clearLastNumber: (state) => {
      state.display = state.display.length > 1 ? state.display.slice(0, -1) : '0'
    },
    clearDisplay: (state) => {
      state.display = ''
    },
    calculate: (state) => {
      if (checkValue(state.display)) {
        const [result, history] = calculateExpression(state.display)
        state.display = result
        state.history.push(history)
        state.isShouldClear = true
      } else {
        state.isError = true
      }
    },
    clearHistory: (state) => {
      state.display = ''
      state.isError = false
      state.isShouldClear = false
      state.history = []
    },
    clearError: (state, action) => {
      if (state.isError) {
        state.isError = false
      }
    }
  }
})

export const { setDisplay, clearLastNumber, clearDisplay, calculate, clearHistory, clearError, setValue } = calculatorSlice.actions

export default calculatorSlice.reducer