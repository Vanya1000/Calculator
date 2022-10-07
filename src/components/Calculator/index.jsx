import React from 'react'

import { StyledFlexContainer, StyledCalculatorWrapper } from './styled'
import DisplayFC from './Display'
import HistoryFC from './History'
import KeypadFC from './Keypad'

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