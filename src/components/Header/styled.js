import { NavLink } from "react-router-dom"
import styled from "styled-components"



export const StyledHeader = styled.header`
  background-color: ${props => props.theme.palette.background.secondary};
  color: ${props => props.theme.palette.text.secondary};
  
`

export const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  justify-content: space-between;
`

export const StyledTitle = styled.p`
  font-size: 20px;
`

export const StyledUl = styled.ul`
  display: flex;
`
export const StyledLi = styled.li`
  list-style: none; 
  margin-left: 20px;
  &:hover {
    cursor: pointer;
    border-bottom: 1px solid ${props => props.theme.palette.text.secondary};
  }
  
`

export const StyledRouterLink = styled(NavLink)`
  color: ${props => props.theme.palette.text.secondary};
  text-decoration: none;
`