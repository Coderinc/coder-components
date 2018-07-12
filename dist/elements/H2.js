'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var H2 = _styledComponents2.default.h2.withConfig({
  displayName: 'H2'
})(['color:', ';font-size:1.5rem;line-height:2.25rem;font-weight:', ';'], function (_ref) {
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