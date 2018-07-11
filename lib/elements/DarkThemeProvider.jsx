import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import darkThemeBase from '../styles/themes/darkTheme';
import baseColors from '../styles/base-colors';

const DarkThemeProvider = ({ primary, children }) => {
  const theme = {};
  Object.keys(darkThemeBase).forEach((k) => {
    theme[k] = baseColors[darkThemeBase[k]] || darkThemeBase[k];
  });
  theme.primary = baseColors[primary];

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};

DarkThemeProvider.propTypes = {
  primary: PropTypes.string,
  children: PropTypes.element,
};

DarkThemeProvider.defaultProps = {
  primary: 'pink',
  children: null,
};

export default DarkThemeProvider;
