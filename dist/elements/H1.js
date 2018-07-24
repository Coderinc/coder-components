'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var H1 = _styledComponents2.default.h1.withConfig({
  displayName: 'H1'
})(['color:', ';font-size:2.25rem;line-height:3.375rem;font-weight:', ';'], function (_ref) {
  var theme = _ref.theme,
      color = _ref.color;
  return color ? theme[color] : theme.primaryFont;
}, function (_ref2) {
  var light = _ref2.light;
  return light ? 'lighter' : 'bold';
});

H1.propTypes = {
  light: _propTypes2.default.bool
};

H1.defaultProps = {
  light: false
};

exports.default = H1;