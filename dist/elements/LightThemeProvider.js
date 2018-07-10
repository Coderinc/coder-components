'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _lightTheme = require('../styles/themes/lightTheme');

var _lightTheme2 = _interopRequireDefault(_lightTheme);

var _baseColors = require('../styles/base-colors');

var _baseColors2 = _interopRequireDefault(_baseColors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  var _props$primary = props.primary,
      primary = _props$primary === undefined ? 'pink' : _props$primary;


  var theme = {};
  Object.keys(_lightTheme2.default).forEach(function (k) {
    theme[k] = _baseColors2.default[_lightTheme2.default[k]] || _lightTheme2.default[k];
  });
  theme.primary = _baseColors2.default[primary];

  return _react2.default.createElement(
    _styledComponents.ThemeProvider,
    { theme: theme },
    props.children
  );
};