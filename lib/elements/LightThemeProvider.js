import React from 'react';
import { ThemeProvider } from 'styled-components';
import lightThemeBase from '../styles/themes/lightTheme';
import baseColors from '../styles/base-colors';

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
  );
};
