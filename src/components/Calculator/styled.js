import styled from "styled-components"

export const StyledFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  color: ${props => props.theme.palette.text.primary};
`

export const StyledCalculatorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

`