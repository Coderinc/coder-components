import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '../../node_modules/styled-components';
import lightThemeBase from '../styles/themes/lightTheme';
import baseColors from '../styles/base-colors';

const LightThemeProvider = ({ primary, children }) => {
  const theme = {};
  Object.keys(lightThemeBase).forEach((k) => {
    theme[k] = baseColors[lightThemeBase[k]] || lightThemeBase[k];
  });
  theme.primary = baseColors[primary];

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};

LightThemeProvider.propTypes = {
  primary: PropTypes.string,
  children: PropTypes.element,
};

LightThemeProvider.defaultProps = {
  primary: 'pink',
  children: null,
};

export default LightThemeProvider;
