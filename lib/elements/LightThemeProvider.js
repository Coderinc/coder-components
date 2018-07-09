import React from 'react';
import { ThemeProvider } from 'styled-components';
import lightThemeBase from '../styles/lightTheme';
import baseColors from '../styles/baseColors';

export default props => {
  const { primary = 'pink' } = props;

  const theme = {};
  Object.keys(lightThemeBase).forEach(k => {
    theme[k] = baseColors[lightThemeBase[k]] || lightThemeBase[k];
  });
  theme.primary = baseColors[primary];

  return (
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  )
};
