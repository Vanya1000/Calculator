import { createSlice } from '@reduxjs/toolkit'


const initialState = {

}

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {

  }
})

export const { setDisplay } = calculatorSlice.actions

export default calculatorSlice.reducer