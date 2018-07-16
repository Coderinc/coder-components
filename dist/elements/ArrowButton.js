'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = _styledComponents2.default.div.withConfig({
  displayName: 'Button'
})(['background-color:', ';color:', ';outline:none;border:none;cursor:pointer;display:flex;justify-content:center;align-items:center;height:2.5rem;width:2.5rem;padding:0.75rem;margin:1rem;border-radius:50%;box-sizing:border-box;box-shadow:', ';transition:0.5s ease all;&::before{content:\'\f100\';font-size:0.875rem;font-family:coder-icons;transform:', ';}&:hover{box-shadow:', ';}'], function (_ref) {
  var disabled = _ref.disabled,
      secondary = _ref.secondary,
      theme = _ref.theme,
      color = _ref.color;

  if (disabled) {
    return theme.offsetBackground;
  }

  if (secondary) {
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
  return disabled ? undefined : '0 1px 3px rgba(0, 0, 0, 0.02), 0 1px 2px rgba(0, 0, 0, 0.04)';
}, function (_ref4) {
  var reversed = _ref4.reversed;
  return reversed ? 'scaleX(-1)' : undefined;
}, function (_ref5) {
  var disabled = _ref5.disabled;
  return disabled ? undefined : '0 5px 10px rgba(0, 0, 0, 0.25), 0 5px 5px rgba(0, 0, 0, 0.10)';
});

exports.default = Button;