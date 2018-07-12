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

var ProgressWrapper = _styledComponents2.default.div.withConfig({
  displayName: 'ProgressWrapper'
})(['background-color:', ';height:0.75rem;width:100%;border-radius:0.375rem;'], function (_ref) {
  var theme = _ref.theme;
  return theme.offsetBackground;
});

var Progress = _styledComponents2.default.div.withConfig({
  displayName: 'Progress'
})(['background-color:', ';height:100%;width:', '%;border-radius:0.5rem;transition:width 0.25s linear;'], function (_ref2) {
  var theme = _ref2.theme;
  return theme.primary;
}, function (_ref3) {
  var percent = _ref3.percent;
  return percent || 0;
});

var ProgressBar = function ProgressBar(_ref4) {
  var percent = _ref4.percent,
      props = _objectWithoutProperties(_ref4, ['percent']);

  return _react2.default.createElement(
    ProgressWrapper,
    props,
    _react2.default.createElement(Progress, { percent: percent })
  );
};

ProgressBar.propTypes = {
  percent: _propTypes2.default.number
};

ProgressBar.defaultProps = {
  percent: 0
};

exports.default = ProgressBar;