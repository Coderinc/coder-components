'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Paragraph = require('../elements/Paragraph');

var _Paragraph2 = _interopRequireDefault(_Paragraph);

var _Chip = require('../elements/Chip');

var _Chip2 = _interopRequireDefault(_Chip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var BarContainer = _styledComponents2.default.div.withConfig({
  displayName: 'BarContainer'
})(['background-color:', ';color:', ';display:flex;align-items:center;box-sizing:border-box;width:100%;margin:0.25rem 0;padding:0.5rem;border-radius:0.25rem;&::before{font-size:1.5rem;font-family:coder-icons;font-weight:normal;content:\'\f108\';margin-right:0.5rem;}'], function (_ref) {
  var active = _ref.active,
      theme = _ref.theme;
  return active ? theme.activeBackground : theme.offsetBackground;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.primaryFont;
});

var Fill = _styledComponents2.default.div.withConfig({
  displayName: 'Fill'
})(['flex:1;']);

var PhaseBar = function PhaseBar(_ref3) {
  var label = _ref3.label,
      phase = _ref3.phase,
      value = _ref3.value,
      onClick = _ref3.onClick,
      props = _objectWithoutProperties(_ref3, ['label', 'phase', 'value', 'onClick']);

  return _react2.default.createElement(
    BarContainer,
    _extends({}, props, { onClick: onClick ? function () {
        return onClick(value);
      } : undefined }),
    _react2.default.createElement(
      _Paragraph2.default,
      null,
      label
    ),
    _react2.default.createElement(Fill, null),
    _react2.default.createElement(_Chip2.default, { label: phase })
  );
};

PhaseBar.propTypes = {
  label: _propTypes2.default.string.isRequired,
  phase: _propTypes2.default.string.isRequired,
  // eslint-disable-next-line
  value: _propTypes2.default.any,
  onClick: _propTypes2.default.func
};

PhaseBar.defaultProps = {
  value: 0,
  onClick: undefined
};

exports.default = PhaseBar;