'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  background-color: ', ';\n\n  color: ', ';\n\n  margin: 1rem 0.5rem;\n  padding: 0.75rem;\n  font-size: 0.875rem;\n  letter-spacing: 0.0625rem;\n  outline: none;\n  border: none;\n  cursor: ', ';\n  border-radius: 0.25rem;\n  text-transform: uppercase;\n  font-weight: 200;\n  width: ', 'px;\n  max-width: 100%;\n  position: relative;\n  text-align: ', ';\n  transition: 0.5s ease all;\n\n  box-shadow: ', ';\n\n  &::before,\n  &::after {\n    position: absolute;\n    content: \'\f100\';\n    font-family: coder-icons;\n    font-size: 1rem;\n    transition: 0.5s ease all;\n  }\n\n  &::before {\n    transform: scaleX(-1);\n    display: ', ';\n    left: 24px;\n  }\n\n  &:hover::before {\n    left: ', ';\n  }\n\n  &::after {\n    display: ', ';\n    right: 24px;\n  }\n\n  &:hover::after {\n    right: ', ';\n  }\n\n  &:hover {\n    color: ', ';\n    box-shadow: ', ';\n  }\n'], ['\n  background-color: ', ';\n\n  color: ', ';\n\n  margin: 1rem 0.5rem;\n  padding: 0.75rem;\n  font-size: 0.875rem;\n  letter-spacing: 0.0625rem;\n  outline: none;\n  border: none;\n  cursor: ', ';\n  border-radius: 0.25rem;\n  text-transform: uppercase;\n  font-weight: 200;\n  width: ', 'px;\n  max-width: 100%;\n  position: relative;\n  text-align: ', ';\n  transition: 0.5s ease all;\n\n  box-shadow: ', ';\n\n  &::before,\n  &::after {\n    position: absolute;\n    content: \'\\f100\';\n    font-family: coder-icons;\n    font-size: 1rem;\n    transition: 0.5s ease all;\n  }\n\n  &::before {\n    transform: scaleX(-1);\n    display: ', ';\n    left: 24px;\n  }\n\n  &:hover::before {\n    left: ', ';\n  }\n\n  &::after {\n    display: ', ';\n    right: 24px;\n  }\n\n  &:hover::after {\n    right: ', ';\n  }\n\n  &:hover {\n    color: ', ';\n    box-shadow: ', ';\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ButtonDiv = _styledComponents2.default.div(_templateObject, function (_ref) {
  var disabled = _ref.disabled,
      secondary = _ref.secondary,
      ternary = _ref.ternary,
      theme = _ref.theme,
      color = _ref.color;

  if (disabled) {
    return theme.offsetBackground;
  }

  if (secondary || ternary) {
    return theme.activeBackground;
  }
  return theme[color || 'primary'];
}, function (_ref2) {
  var disabled = _ref2.disabled,
      secondary = _ref2.secondary,
      ternary = _ref2.ternary,
      theme = _ref2.theme,
      color = _ref2.color;

  if (disabled) {
    return theme.offsetFont;
  }

  if (ternary) {
    return theme.offsetFont;
  }
  if (secondary) {
    return theme[color || 'primary'];
  }
  return theme.primaryFont;
}, function (_ref3) {
  var disabled = _ref3.disabled;
  return disabled ? 'auto' : 'pointer';
}, function (_ref4) {
  var width = _ref4.width;
  return width;
}, function (_ref5) {
  var reversed = _ref5.reversed;
  return reversed ? 'right' : 'left';
}, function (_ref6) {
  var disabled = _ref6.disabled;
  return disabled ? undefined : '0 1px 3px rgba(0, 0, 0, 0.02), 0 1px 2px rgba(0, 0, 0, 0.04)';
}, function (_ref7) {
  var reversed = _ref7.reversed;
  return reversed ? undefined : 'none';
}, function (_ref8) {
  var disabled = _ref8.disabled;
  return disabled ? undefined : '16px';
}, function (_ref9) {
  var reversed = _ref9.reversed;
  return reversed ? 'none' : undefined;
}, function (_ref10) {
  var disabled = _ref10.disabled;
  return disabled ? undefined : '16px';
}, function (_ref11) {
  var ternary = _ref11.ternary,
      theme = _ref11.theme,
      color = _ref11.color;
  return ternary ? theme[color || 'primary'] : undefined;
}, function (_ref12) {
  var disabled = _ref12.disabled;
  return disabled ? undefined : '0 5px 10px rgba(0, 0, 0, 0.25), 0 5px 5px rgba(0, 0, 0, 0.10)';
});

var Button = function Button(_ref13) {
  var label = _ref13.label,
      props = _objectWithoutProperties(_ref13, ['label']);

  return _react2.default.createElement(
    ButtonDiv,
    props,
    label
  );
};

Button.propTypes = {
  label: _propTypes2.default.string
};

Button.defaultProps = {
  label: 'Click'
};

exports.default = Button;