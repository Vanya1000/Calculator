import React from 'react'
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '@/globalStyles';

import { lightTheme, darkTheme, coloredTheme } from '../../theme/theme';
import Header from '../Header';
import { StyledWrapper } from './styled';



const Layout = () => {
  const currentTheme = useSelector(state => state.settings.theme);

  const chooseCurrentTheme = () => {
    switch (currentTheme) {
      case 'light':
        return lightTheme;
      case 'dark':
        return darkTheme;
      case 'colored':
        return coloredTheme;
      default:
        return lightTheme;
    }
  }
  return (
    <ThemeProvider theme={chooseCurrentTheme} >
      <GlobalStyles />
      <Header />
      <StyledWrapper>
        <Outlet />
      </StyledWrapper>
    </ThemeProvider>
  )
}

export default Layout