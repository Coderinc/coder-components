'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  color: ', ';\n  font-size: 1.25rem;\n  line-height: 2rem;\n  font-weight: ', ';\n'], ['\n  color: ', ';\n  font-size: 1.25rem;\n  line-height: 2rem;\n  font-weight: ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = _styledComponents2.default.h3(_templateObject, function (props) {
  return props.theme.primaryFont;
}, function (props) {
  return props.light ? 'lighter' : 'bold';
});