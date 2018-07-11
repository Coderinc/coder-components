'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  padding: 0.5rem 0;\n'], ['\n  width: 100%;\n  padding: 0.5rem 0;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  background-color: transparent;\n  caret-color: ', ';\n  outline: none;\n  border: none;\n  font-family: circular;\n  font-size: ', ';\n  font-weight: ', ';\n  color: ', ';\n  letter-spacing: 0.0625rem;\n  width: 100%;\n\n  &::placeholder {\n    color: ', ';\n  }\n'], ['\n  background-color: transparent;\n  caret-color: ', ';\n  outline: none;\n  border: none;\n  font-family: circular;\n  font-size: ', ';\n  font-weight: ', ';\n  color: ', ';\n  letter-spacing: 0.0625rem;\n  width: 100%;\n\n  &::placeholder {\n    color: ', ';\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  color: ', ';\n  font-size: 0.625rem;\n  font-weight: lighter;\n  line-height: 1rem;\n'], ['\n  color: ', ';\n  font-size: 0.625rem;\n  font-weight: lighter;\n  line-height: 1rem;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var InputWrapper = _styledComponents2.default.div(_templateObject);

var Input = _styledComponents2.default.input(_templateObject2, function (_ref) {
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

var Error = _styledComponents2.default.span(_templateObject3, function (_ref6) {
  var theme = _ref6.theme;
  return theme.pink;
});

var TextInput = function TextInput(_ref7) {
  var meta = _ref7.meta,
      props = _objectWithoutProperties(_ref7, ['meta']);

  return _react2.default.createElement(
    InputWrapper,
    null,
    _react2.default.createElement(Input, props),
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
  bold: _propTypes2.default.bool
};

TextInput.defaultProps = {
  large: false,
  bold: false
};

exports.default = TextInput;