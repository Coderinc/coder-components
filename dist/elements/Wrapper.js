'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _styledComponents2.default.div(['box-sizing:border-box;width:100%;height:100%;overflow-x:', ';overflow-y:', ';background-color:', ';color:', ';'], function (_ref) {
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