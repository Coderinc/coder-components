import React from 'react';
import { ThemeProvider } from 'styled-components';
import darkThemeBase from '../styles/themes/darkTheme';
import baseColors from '../styles/base-colors';

export default props => {
  const { primary = 'pink' } = props;

  const theme = {};
  Object.keys(darkThemeBase).forEach(k => {
    theme[k] = baseColors[darkThemeBase[k]] || darkThemeBase[k];
  });
  theme.primary = baseColors[primary];

  return (
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  );
};
