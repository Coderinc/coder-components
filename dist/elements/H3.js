'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var H3 = _styledComponents2.default.h3.withConfig({
  displayName: 'H3'
})(['color:', ';font-size:1.25rem;line-height:2rem;font-weight:', ';'], function (_ref) {
  var theme = _ref.theme;
  return theme.primaryFont;
}, function (_ref2) {
  var light = _ref2.light;
  return light ? 'lighter' : 'bold';
});

H3.propTypes = {
  light: _propTypes2.default.bool
};

H3.defaultProps = {
  light: false
};

exports.default = H3;