import React from 'react'
import { useDispatch } from 'react-redux'

import * as Styled from './styled'
import { calculatorHandler } from '@/utils/command/command'
import { 
  setDisplay, 
  clearLastNumber, 
  clearDisplay, 
  calculate,
  clearError
} from '@/store/slice/calculatorSlice'


const btn = [
  'C', 7, 8, 9, '*', 
  '-', 4, 5, 6, '/',
  '+', 1, 2, 3, '=',
  '.', '(', 0,  ')', '←',
]

const KeypadFC = () => {
  const dispatch = useDispatch();

  const handleClick = (v) => () => {
    // calculatorHandler(v); example of implementation through a pattern Command
    dispatch(clearError())
      switch (v) {
        case '=':
          dispatch(calculate())
          break
        case 'C':
          dispatch(clearDisplay())
          break
        case '←':
          dispatch(clearLastNumber())
          break
        default:
          dispatch(setDisplay(v))
    }
  }

  return (
    <Styled.KeypadWrapper>
      {btn.map((value) => (
          <Styled.Button data-cy={value} onClick={handleClick(value)} key={`${value}-key`}>
            {value}
          </Styled.Button>
      ))}
    </Styled.KeypadWrapper>
  )
}

export default KeypadFC