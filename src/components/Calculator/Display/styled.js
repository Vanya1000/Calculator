import styled from "styled-components"

export const StyledDisplayWrapper = styled.div`
  position: relative;
  padding: 20px;
  border-bottom: 1px solid ${props => props.theme.palette.text.primary};
  margin: 0 10px;
  display: flex;
  justify-content: flex-end;
`

export const StyledError = styled.p`
  position: absolute;
  display: ${props => props.isError ? 'block' : 'none'};
  left: 20px;
  padding-right: 5px;
  color: #ff0000;
`

export const StyledResult = styled.p`
  font-size: 30px;
  padding-right: 30px;
`