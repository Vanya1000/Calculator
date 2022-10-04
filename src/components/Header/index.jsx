import React from 'react'
import { 
  StyledHeader, 
  StyledContainer,
  StyledTitle,  
  StyledUl, 
  StyledLi, 
  StyledRouterLink 
} from './styled'

const path = [
  {
    path: '/',
    name: 'Home(FC)',
  },
  {
    path: '/homecc',
    name: 'Home(CC)',
  },
  {
    path: '/settings',
    name: 'Settings',
  }
]

const Header = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <StyledTitle>
          Calculator App
        </StyledTitle>
          <StyledUl>
            {path.map(({ path, name }) => (
                <StyledLi key={path}>
                  <StyledRouterLink to={path}>{name}</StyledRouterLink>
                </StyledLi>
              )
            )}
          </StyledUl>
        </StyledContainer>
    </StyledHeader>
  )
}

export default Header