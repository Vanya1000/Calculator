import React from 'react'
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '@/globalStyles';
import { lightTheme, darkTheme, coloredTheme } from '@/theme/theme';
import { StyledContainer } from './styled';
import Header from '../Header';
import ErrorBoundary from '@/HOC/ErrorBoundary';

const Layout = () => {
  const currentTheme = useSelector(state => state.settings.theme);

  const theme = {
    light: lightTheme,
    dark: darkTheme,
    colored: coloredTheme,
  }

  return (
    <ThemeProvider theme={theme[currentTheme]} >
      <GlobalStyles />
      <Header />
      <StyledContainer>
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </StyledContainer>
    </ThemeProvider>
  )
}

export default Layout