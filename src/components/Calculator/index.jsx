import React from 'react'
import DisplayFC from './Display'
import HistoryFC from './History'
import KeypadFC from './Keypad'
import { StyledFlexContainer, StyledCalculatorWrapper } from './styled'

const CalculatorFC = () => {
  return (
    <StyledFlexContainer>
      <StyledCalculatorWrapper>
        <DisplayFC />
        <KeypadFC />
      </StyledCalculatorWrapper>
      <HistoryFC/>
    </StyledFlexContainer>
  )
}

export default CalculatorFC