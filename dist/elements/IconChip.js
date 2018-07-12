'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ChipWrapper = _styledComponents2.default.div.withConfig({
  displayName: 'ChipWrapper'
})(['background-color:', ';color:', ';padding:0.375rem 0.5rem 0.25rem;margin:0.25rem;border-radius:0.125rem;font-size:0.625rem;font-weight:lighter;letter-spacing:0.0625rem;display:flex;img{width:0.875rem;height:0.875rem;border-radius:50%;margin-right:0.375rem;}'], function (_ref) {
  var theme = _ref.theme;
  return theme.activeBackground;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.primaryFont;
});

var IconChip = function IconChip(_ref3) {
  var icon = _ref3.icon,
      label = _ref3.label,
      props = _objectWithoutProperties(_ref3, ['icon', 'label']);

  return _react2.default.createElement(
    ChipWrapper,
    props,
    icon && _react2.default.createElement('img', { alt: 'Icon', src: icon }),
    label
  );
};

IconChip.propTypes = {
  icon: _propTypes2.default.string,
  label: _propTypes2.default.string
};

IconChip.defaultProps = {
  icon: null,
  label: 'Joe Schmoe'
};

exports.default = IconChip;