import React from 'react'
import { useDispatch } from 'react-redux'
import { 
  setDisplay, 
  clearLastNumber, 
  clearDisplay, 
  calculate
} from '@/store/slice/calculatorSlice'
import { StyledKeypadWrapper, StyledButton } from './styled'

const btn = [
  'C', 7, 8, 9, '*', 
  '-', 4, 5, 6, '/',
  '+', 1, 2, 3, '=',
  '.', '(', 0,  ')', '←',
]

const KeypadFC = () => {
  const dispatch = useDispatch();

  const handleClick = (v) => () => {
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
    <StyledKeypadWrapper>
      {btn.map((value) => (
          <StyledButton onClick={handleClick(value)} key={value}>
            {value}
          </StyledButton>
      ))}
    </StyledKeypadWrapper>
  )
}

export default KeypadFC