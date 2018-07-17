'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ButtonDiv = _styledComponents2.default.div.withConfig({
  displayName: 'ButtonDiv'
})(['background-color:', ';color:', ';margin:1rem 0.5rem;padding:0.75rem;font-size:0.875rem;letter-spacing:0.0625rem;outline:none;border:none;cursor:', ';border-radius:0.25rem;text-transform:uppercase;font-weight:200;width:', 'px;max-width:100%;position:relative;text-align:', ';transition:0.5s ease all;box-shadow:', ';&::before,&::after{position:absolute;content:\'\f100\';font-family:coder-icons;font-size:1rem;transition:0.5s ease all;}&::before{transform:scaleX(-1);display:', ';left:24px;}&:hover::before{left:', ';}&::after{display:', ';right:24px;}&:hover::after{right:', ';}&:hover{color:', ';box-shadow:', ';}'], function (_ref) {
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
      disabled = _ref13.disabled,
      onClick = _ref13.onClick,
      props = _objectWithoutProperties(_ref13, ['label', 'disabled', 'onClick']);

  return _react2.default.createElement(
    ButtonDiv,
    _extends({}, props, { disabled: disabled, onClick: disabled ? undefined : onClick }),
    label
  );
};

Button.propTypes = {
  label: _propTypes2.default.string,
  secondary: _propTypes2.default.bool,
  ternary: _propTypes2.default.bool,
  color: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  onClick: _propTypes2.default.func
};

Button.defaultProps = {
  label: 'Click',
  secondary: false,
  ternary: false,
  color: 'primary',
  disabled: false,
  onClick: undefined
};

exports.default = Button;