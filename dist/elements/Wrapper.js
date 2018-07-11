'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  overflow-x: ', ';\n  overflow-y: ', ';\n  background-color: ', ';\n  color: ', ';\n'], ['\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  overflow-x: ', ';\n  overflow-y: ', ';\n  background-color: ', ';\n  color: ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = _styledComponents2.default.div(_templateObject, function (_ref) {
  var scrollX = _ref.scrollX;
  return scrollX ? 'auto' : 'hidden';
}, function (_ref2) {
  var scrollY = _ref2.scrollY;
  return scrollY ? 'auto' : 'hidden';
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.primaryBackground;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.primaryFont;
});