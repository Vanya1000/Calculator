import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400&family=Merriweather:wght@400;700&display=swap');
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100vh;
    font-family: ${props => props.theme.font};
    background: ${props => props.theme.palette.background.primary};
    font-weight: 300;
  }
`