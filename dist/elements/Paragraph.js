'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Paragraph = _styledComponents2.default.p.withConfig({
  displayName: 'Paragraph'
})(['color:', ';font-size:0.875rem;line-height:1.25rem;font-weight:', ';'], function (_ref) {
  var theme = _ref.theme,
      color = _ref.color;
  return color ? theme[color] : theme.primaryFont;
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