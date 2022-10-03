import styled, { createGlobalStyle } from 'styled-components'
import theme from './theme/theme'


export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }

  html, body {
    width: 100%;
    height: 100vh;
    font-family: ${theme.font};
    background: ${props => props.theme.background.primary};
  }
`