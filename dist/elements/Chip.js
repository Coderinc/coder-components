'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Chip = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  padding: 0.25rem 0.5rem;\n  margin: 0.25rem;\n  border-radius: 0.125rem;\n\n  font-size: 0.625rem;\n\n  background-color: ', ';\n  color: ', ';\n'], ['\n  padding: 0.25rem 0.5rem;\n  margin: 0.25rem;\n  border-radius: 0.125rem;\n\n  font-size: 0.625rem;\n\n  background-color: ', ';\n  color: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var phases = {
  Develop: {
    "background": "pink",
    "color": "white"
  },
  Measure: {
    "background": "blue",
    "color": "darkGray"
  },
  "Design": {
    "background": "yellow",
    "color": "darkGray"
  },
  "Summarize": {
    "background": "orange",
    "color": "darkGray"
  },
  "Research": {
    "background": "darkBlue",
    "color": "white"
  },
  "Execute": {
    "background": "green",
    "color": "darkGray"
  },
  "Model": {
    "background": "red",
    "color": "white"
  },
  "Test": {
    "background": "purple",
    "color": "white"
  },
  "Maintain": {
    "background": "teal",
    "color": "darkGray"
  }
};

var ChipWrapper = _styledComponents2.default.div(_templateObject, function (props) {
  return phases[props.label] ? props.theme[phases[props.label].background] : props.theme.primary;
}, function (props) {
  return phases[props.label] ? props.theme[phases[props.label].color] : props.theme.primaryFont;
});

var Chip = exports.Chip = function Chip(props) {
  return _react2.default.createElement(
    ChipWrapper,
    props,
    props.label
  );
};

exports.default = Chip;