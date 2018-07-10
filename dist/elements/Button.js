'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  background-color: ', ';\n\n  color: ', ';\n\n  margin: 1rem 0.5rem;\n  padding: 0.75rem;\n  font-size: 0.875rem;\n  letter-spacing: 0.0625rem;\n  outline: none;\n  border: none;\n  cursor: ', ';\n  border-radius: 0.25rem;\n  text-transform: uppercase;\n  font-weight: 200;\n  width: ', 'px;\n  max-width: 100%;\n  position: relative;\n  text-align: ', ';\n  transition: 0.5s ease all;\n\n  box-shadow: ', ';\n\n  &::before,\n  &::after {\n    position: absolute;\n    content: \'\f100\';\n    font-family: coder-icons;\n    font-size: 1rem;\n    transition: 0.5s ease all;\n  }\n\n  &::before {\n    transform: scaleX(-1);\n    display: ', ';\n    left: 24px;\n  }\n\n  &:hover::before {\n    left: ', ';\n  }\n\n  &::after {\n    display: ', ';\n    right: 24px;\n  }\n\n  &:hover::after {\n    right: ', ';\n  }\n\n  &:hover {\n    color: ', ';\n    box-shadow: ', ';\n  }\n'], ['\n  background-color: ', ';\n\n  color: ', ';\n\n  margin: 1rem 0.5rem;\n  padding: 0.75rem;\n  font-size: 0.875rem;\n  letter-spacing: 0.0625rem;\n  outline: none;\n  border: none;\n  cursor: ', ';\n  border-radius: 0.25rem;\n  text-transform: uppercase;\n  font-weight: 200;\n  width: ', 'px;\n  max-width: 100%;\n  position: relative;\n  text-align: ', ';\n  transition: 0.5s ease all;\n\n  box-shadow: ', ';\n\n  &::before,\n  &::after {\n    position: absolute;\n    content: \'\\f100\';\n    font-family: coder-icons;\n    font-size: 1rem;\n    transition: 0.5s ease all;\n  }\n\n  &::before {\n    transform: scaleX(-1);\n    display: ', ';\n    left: 24px;\n  }\n\n  &:hover::before {\n    left: ', ';\n  }\n\n  &::after {\n    display: ', ';\n    right: 24px;\n  }\n\n  &:hover::after {\n    right: ', ';\n  }\n\n  &:hover {\n    color: ', ';\n    box-shadow: ', ';\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ButtonDiv = _styledComponents2.default.div(_templateObject, function (props) {
  if (props.disabled) {
    return props.theme.offsetBackground;
  }

  if (props.secondary || props.ternary) {
    return props.theme.activeBackground;
  }
  return props.theme[props.color || 'primary'];
}, function (props) {
  if (props.disabled) {
    return props.theme.offsetFont;
  }

  if (props.ternary) {
    return props.theme.offsetFont;
  } else if (props.secondary) {
    return props.theme[props.color || 'primary'];
  }
  return props.theme.primaryFont;
}, function (props) {
  return props.disabled ? 'auto' : 'pointer';
}, function (props) {
  return props.width;
}, function (props) {
  return props.reversed ? 'right' : 'left';
}, function (props) {
  return props.disabled ? undefined : '0 1px 3px rgba(0, 0, 0, 0.02), 0 1px 2px rgba(0, 0, 0, 0.04)';
}, function (props) {
  return props.reversed ? undefined : 'none';
}, function (props) {
  return props.disabled ? undefined : '16px';
}, function (props) {
  return props.reversed ? 'none' : undefined;
}, function (props) {
  return props.disabled ? undefined : '16px';
}, function (props) {
  return props.ternary ? props.theme[props.color || 'primary'] : undefined;
}, function (props) {
  return props.disabled ? undefined : '0 5px 10px rgba(0, 0, 0, 0.25), 0 5px 5px rgba(0, 0, 0, 0.10)';
});

var Button = exports.Button = function Button(props) {
  return _react2.default.createElement(
    ButtonDiv,
    props,
    props.label
  );
};

exports.default = Button;