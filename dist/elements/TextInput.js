'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  padding: 0.5rem 0;\n\n  display: flex;\n  flex-wrap: wrap;\n'], ['\n  width: 100%;\n  padding: 0.5rem 0;\n\n  display: flex;\n  flex-wrap: wrap;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 2rem;\n  height: 2rem;\n  margin: 0 1rem;\n  margin-top: 0.5rem;\n'], ['\n  width: 2rem;\n  height: 2rem;\n  margin: 0 1rem;\n  margin-top: 0.5rem;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  background-color: transparent;\n  caret-color: ', ';\n  outline: none;\n  border: none;\n  font-family: circular;\n  font-size: ', ';\n  font-weight: ', ';\n  color: ', ';\n  letter-spacing: 0.0625rem;\n  flex: 1;\n\n  &::placeholder {\n    color: ', ';\n  }\n'], ['\n  background-color: transparent;\n  caret-color: ', ';\n  outline: none;\n  border: none;\n  font-family: circular;\n  font-size: ', ';\n  font-weight: ', ';\n  color: ', ';\n  letter-spacing: 0.0625rem;\n  flex: 1;\n\n  &::placeholder {\n    color: ', ';\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  color: ', ';\n  font-size: 0.625rem;\n  font-weight: lighter;\n  line-height: 1rem;\n  width: 100%;\n'], ['\n  color: ', ';\n  font-size: 0.625rem;\n  font-weight: lighter;\n  line-height: 1rem;\n  width: 100%;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var InputWrapper = _styledComponents2.default.div(_templateObject);

var Img = _styledComponents2.default.img(_templateObject2);

var Input = _styledComponents2.default.input(_templateObject3, function (_ref) {
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

var Textarea = _styledComponents2.default.textarea(_templateObject3, function (_ref6) {
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

var Error = _styledComponents2.default.span(_templateObject4, function (_ref11) {
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