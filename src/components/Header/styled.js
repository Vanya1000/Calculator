import { NavLink } from "react-router-dom"
import styled from "styled-components"



export const StyledHeader = styled.header`
  background-color: ${props => props.theme.headerBgColor.primary};
  color: ${props => props.theme.headerColor.primary};
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
    border-bottom: 1px solid ${props => props.theme.headerColor.primary};
  }
  
`

export const StyledRouterLink = styled(NavLink)`
  color: ${props => props.theme.headerColor.primary};
  text-decoration: none;
`