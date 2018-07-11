'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _darkTheme = require('../styles/themes/darkTheme');

var _darkTheme2 = _interopRequireDefault(_darkTheme);

var _baseColors = require('../styles/base-colors');

var _baseColors2 = _interopRequireDefault(_baseColors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DarkThemeProvider = function DarkThemeProvider(_ref) {
  var primary = _ref.primary,
      children = _ref.children;

  var theme = {};
  Object.keys(_darkTheme2.default).forEach(function (k) {
    theme[k] = _baseColors2.default[_darkTheme2.default[k]] || _darkTheme2.default[k];
  });
  theme.primary = _baseColors2.default[primary];

  return _react2.default.createElement(
    _styledComponents.ThemeProvider,
    { theme: theme },
    children
  );
};

DarkThemeProvider.propTypes = {
  primary: _propTypes2.default.string,
  children: _propTypes2.default.element
};

DarkThemeProvider.defaultProps = {
  primary: 'pink',
  children: null
};

exports.default = DarkThemeProvider;