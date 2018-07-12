'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InputWrapper = _styledComponents2.default.div.withConfig({
  displayName: 'InputWrapper'
})(['width:100%;padding:0.5rem 0;display:flex;flex-wrap:wrap;']);

var Img = _styledComponents2.default.img.withConfig({
  displayName: 'Img'
})(['width:2rem;height:2rem;margin:0 1rem;margin-top:0.5rem;']);

var Input = _styledComponents2.default.input.withConfig({
  displayName: 'Input'
})(['background-color:transparent;caret-color:', ';outline:none;border:none;font-family:circular;font-size:', ';font-weight:', ';color:', ';letter-spacing:0.0625rem;flex:1;&::placeholder{color:', ';}'], function (_ref) {
  var theme = _ref.theme;
  return theme.primary;
}, function (_ref2) {
  var large = _ref2.large;
  return large ? '2.25rem' : '0.875rem';
}, function (_ref3) {
  var bold = _ref3.bold;
  return bold ? 'bold' : 'lighter';
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.primaryFont;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.offsetFont;
});

var Textarea = _styledComponents2.default.textarea.withConfig({
  displayName: 'Textarea'
})(['background-color:transparent;caret-color:', ';outline:none;border:none;font-family:circular;font-size:', ';font-weight:', ';color:', ';letter-spacing:0.0625rem;flex:1;&::placeholder{color:', ';}'], function (_ref6) {
  var theme = _ref6.theme;
  return theme.primary;
}, function (_ref7) {
  var large = _ref7.large;
  return large ? '2.25rem' : '0.875rem';
}, function (_ref8) {
  var bold = _ref8.bold;
  return bold ? 'bold' : 'lighter';
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.primaryFont;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.offsetFont;
});

var Error = _styledComponents2.default.span.withConfig({
  displayName: 'Error'
})(['color:', ';font-size:0.625rem;font-weight:lighter;line-height:1rem;width:100%;'], function (_ref11) {
  var theme = _ref11.theme;
  return theme.pink;
});

var TextInput = function TextInput(_ref12) {
  var multiline = _ref12.multiline,
      icon = _ref12.icon,
      meta = _ref12.meta,
      input = _ref12.input;
  return _react2.default.createElement(
    InputWrapper,
    null,
    icon && _react2.default.createElement(Img, { src: icon, alt: 'Icon' }),
    multiline ? _react2.default.createElement(Textarea, input) : _react2.default.createElement(Input, input),
    _react2.default.createElement(
      Error,
      null,
      meta.error && meta.touched && meta.visited && !meta.active && meta.error
    )
  );
};

TextInput.propTypes = {
  input: _propTypes2.default.object.isRequired,
  meta: _propTypes2.default.object.isRequired,
  large: _propTypes2.default.bool,
  bold: _propTypes2.default.bool,
  multiline: _propTypes2.default.bool,
  icon: _propTypes2.default.string
};

TextInput.defaultProps = {
  large: false,
  bold: false,
  multiline: false,
  icon: null
};

exports.default = TextInput;