'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  box-sizing: border-box;\n  margin: 0 auto;\n  width: 100%;\n  max-height: 100%;\n  max-width: ', ';\n'], ['\n  box-sizing: border-box;\n  margin: 0 auto;\n  width: 100%;\n  max-height: 100%;\n  max-width: ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = _styledComponents2.default.div(_templateObject, function (props) {
  if (props.small) {
    return '40rem';
  } else if (props.large) {
    return '75rem';
  } else if (props.extraLarge) {
    return '100rem';
  }
  return '50rem';
});