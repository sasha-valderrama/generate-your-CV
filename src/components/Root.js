import React from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import Navigation from './ui/Navigation';

export default function Root() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navigation />
        <Outlet />
      </ThemeProvider>
    </>
  );
}

export const theme = {
  colors: {
    primary: '#FFF587',
    secondary: '#caf0f8',
    tertiary: '#80004C',
    quaternary: '#223978',
    accent: '#FFA113',
    accentSecond: '#FF6600',
    neutral: '#FCD5D5',
    black: '#000',
    white: '#fff',
  },
  fontSize: {
    xxs: '8px',
    xs: '10px',
    sm: '13px',
    md: '16px',
    lg: '18px',
    xl: '24px',
    xxl: '36px',
  },
  fontFamily: {},
};
