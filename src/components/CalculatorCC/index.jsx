import React from "react";

import { StyledFlexContainer, StyledCalculatorWrapper } from "./styled";
import DisplayCC from "./Display";
import HistoryCC from "./History";
import KeypadCC from "./Keypad";

class CalculatorCC extends React.Component {
  render() {
    return (
      <StyledFlexContainer>
        <StyledCalculatorWrapper>
          <DisplayCC />
          <KeypadCC />
        </StyledCalculatorWrapper>
        <HistoryCC />
      </StyledFlexContainer>
    );
  }
}

export default CalculatorCC;
