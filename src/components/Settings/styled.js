import styled from "styled-components"

export const StyledWrapper = styled.div`
  width: 200px;
  color: ${props => props.theme.palette.text.primary};
`

export const StyledTitle = styled.h1`
  font-weight: 300;
  margin-top: 20px;
`

export const StyledSelect = styled.select`
  margin-top: 20px;
  padding: 15px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  &:focus {
    outline: none;
    border-color: #000000;
  }
`

export const StyledOption = styled.option`
  display: ${(props) => (props.isToggle ? "none" : "block")};
`

export const StyledButton = styled.button`
  display: block;
  margin-top: 20px;
  padding: 15px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: left;
  font-size: 16px;
  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.palette.button.primary};
  }
  &:active {
    opacity: 0.8;
  }
`

