import React from 'react'
import { StyledKeypadWrapper, StyledGridItem, StyledButton } from './styled'

const btn = [
  'C', 7, 8, 9, '*', 
  '-', 4, 5, 6, '|',
  '+', 1, 2, 3, '=',
  '.', '(', 0,  ')', 'CE'
]

const KeypadFC = () => {
  return (
    <StyledKeypadWrapper>
      {btn.map((value) => (
          <StyledButton key={value}>
            {value}
          </StyledButton>
      ))}
    </StyledKeypadWrapper>
  )
}

export default KeypadFC