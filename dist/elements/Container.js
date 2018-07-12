'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = _styledComponents2.default.div.withConfig({
  displayName: 'Container'
})(['box-sizing:border-box;margin:0 auto;padding:1rem;width:100%;max-height:100%;max-width:', ';'], function (_ref) {
  var small = _ref.small,
      large = _ref.large,
      extraLarge = _ref.extraLarge;

  if (small) {
    return '40rem';
  }
  if (large) {
    return '75rem';
  }
  if (extraLarge) {
    return '100rem';
  }
  return '50rem';
});

Container.propTypes = {
  small: _propTypes2.default.bool,
  large: _propTypes2.default.bool,
  extraLarge: _propTypes2.default.bool
};

Container.defaultProps = {
  small: false,
  large: false,
  extraLarge: false
};

exports.default = Container;