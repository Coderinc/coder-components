'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  color: ', ';\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  font-weight: ', ';\n'], ['\n  color: ', ';\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  font-weight: ', ';\n']);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Paragraph = _styledComponents2.default.p(_templateObject, function (_ref) {
  var theme = _ref.theme;
  return theme.primaryFont;
}, function (_ref2) {
  var bold = _ref2.bold;
  return bold ? 'bold' : 'lighter';
});

Paragraph.propTypes = {
  bold: _propTypes2.default.bool
};

Paragraph.defaultProps = {
  bold: false
};

exports.default = Paragraph;