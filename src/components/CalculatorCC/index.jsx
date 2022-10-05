import React from 'react'
import DisplayFC from './Display'
import HistoryFC from './History'
import KeypadFC from './Keypad'

import { StyledFlexContainer, StyledCalculatorWrapper } from './styled'

class CalculatorСC extends React.Component {

  render() {
    return (
      <StyledFlexContainer>
        <StyledCalculatorWrapper>
          <DisplayFC />
          <KeypadFC />
        </StyledCalculatorWrapper>
        <HistoryFC />
      </StyledFlexContainer>
    )
  }
}

export default CalculatorСC