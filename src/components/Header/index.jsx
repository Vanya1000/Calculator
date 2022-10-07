import React from 'react'
import { PATH_PAGE } from '@/routes/path'

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
    path: PATH_PAGE.homeFC,
    name: 'Home(FC)',
  },
  {
    path: PATH_PAGE.homeCC,
    name: 'Home(CC)',
  },
  {
    path: PATH_PAGE.settings,
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