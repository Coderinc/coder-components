'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  color: ', ';\n  font-size: 1.5rem;\n  line-height: 2.25rem;\n  font-weight: ', ';\n'], ['\n  color: ', ';\n  font-size: 1.5rem;\n  line-height: 2.25rem;\n  font-weight: ', ';\n']);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var H2 = _styledComponents2.default.h2(_templateObject, function (_ref) {
  var theme = _ref.theme;
  return theme.primaryFont;
}, function (_ref2) {
  var light = _ref2.light;
  return light ? 'lighter' : 'bold';
});

H2.propTypes = {
  light: _propTypes2.default.bool
};

H2.defaultProps = {
  light: false
};

exports.default = H2;