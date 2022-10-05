import styled, { keyframes } from "styled-components"

export const StyledKeypadWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 100px);
  justify-content: space-between;
  grid-template-rows: repeat(5, 100px);
  grid-gap: 20px;
  margin: 20px 50px 0 50px;
`

const push = keyframes`
  0% {
		border-radius: 10px;
	}
	100% {
		border-radius: 50px;
	}
`
const up = keyframes`
  0% {
		border-radius: 50px;
	}

	100% {
		border-radius: 10px;
	}
`

export const StyledButton = styled.button`
  border: 1px solid ${props => props.theme.palette.text.primary};
  border-radius: 10px;
  font-size: 30px;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.2s linear;

  &:hover {
    background-color: ${props => props.theme.palette.button.primary};
    transition: background-color 0.2s linear;
  }
  &:active {
    animation:  ${push} 0.1s ease-out;
    animation-fill-mode: forwards;
  }
`
