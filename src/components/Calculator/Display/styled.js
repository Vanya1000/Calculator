import styled from "styled-components"

export const StyledDisplayWrapper = styled.div`
  padding: 20px;
  border-bottom: 1px solid ${props => props.theme.palette.text.primary};
  margin: 0 10px;
  display: flex;
  justify-content: flex-end;
`

export const StyledResult = styled.p`
  font-size: 30px;
  padding-right: 30px;
`