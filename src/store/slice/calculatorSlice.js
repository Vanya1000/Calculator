import { createSlice } from '@reduxjs/toolkit'
import { calculateExpression, checkValue, validateInput } from '@/auxiliaryFn/auxiliaryFn'

const initialState = {
  display: '',
  history: [],
  isShouldClear: false,
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
      }
    },
    clearHistory: (state) => {
      state.history = []
    },
  }
})

export const { setDisplay, clearLastNumber, clearDisplay, calculate, clearHistory } = calculatorSlice.actions

export default calculatorSlice.reducer