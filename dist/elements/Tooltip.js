'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  bottom: 0;\n  border-left: 0.375rem solid transparent;\n  border-right: 0.375rem solid transparent;\n  border-bottom: 0.375rem solid ', ';\n'], ['\n  bottom: 0;\n  border-left: 0.375rem solid transparent;\n  border-right: 0.375rem solid transparent;\n  border-bottom: 0.375rem solid ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  right: 0;\n  border-top: 0.375rem solid transparent;\n  border-bottom: 0.375rem solid transparent;\n  border-right: 0.375rem solid ', ';\n'], ['\n  right: 0;\n  border-top: 0.375rem solid transparent;\n  border-bottom: 0.375rem solid transparent;\n  border-right: 0.375rem solid ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  top: 0;\n  border-left: 0.375rem solid transparent;\n  border-right: 0.375rem solid transparent;\n  border-top: 0.375rem solid ', ';\n'], ['\n  top: 0;\n  border-left: 0.375rem solid transparent;\n  border-right: 0.375rem solid transparent;\n  border-top: 0.375rem solid ', ';\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  left: 0;\n  border-top: 0.375rem solid transparent;\n  border-bottom: 0.375rem solid transparent;\n  border-left: 0.375rem solid ', ';\n'], ['\n  left: 0;\n  border-top: 0.375rem solid transparent;\n  border-bottom: 0.375rem solid transparent;\n  border-left: 0.375rem solid ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var topPosition = '\n  top: -0.375rem;\n  left: 50%;\n  transform: translate(-50%, -100%);\n';

var rightPosition = '\n  right: -0.375rem;\n  top: 50%;\n  transform: translate(100%, -50%);\n';

var bottomPosition = '\n  bottom: -0.375rem;\n  left: 50%;\n  transform: translate(-50%, 100%);\n';

var leftPosition = '\n  left: -0.375rem;\n  top: 50%;\n  transform: translate(-100%, -50%);\n';

var TooltipWrapper = _styledComponents2.default.div.withConfig({
  displayName: 'TooltipWrapper'
})(['position:relative;']);

var TooltipArrow = _styledComponents2.default.div.withConfig({
  displayName: 'TooltipArrow'
})(['', ';position:absolute;width:0;height:0;z-index:-1;opacity:0;transition:0.125s all;transition-delay:0.1s;', ':hover &{opacity:1;z-index:5;}'], function (_ref) {
  var top = _ref.top,
      right = _ref.right,
      left = _ref.left;

  if (top) return topPosition;
  if (right) return rightPosition;
  if (left) return leftPosition;
  return bottomPosition;
}, TooltipWrapper);

var TooltipArrowUp = TooltipArrow.extend(_templateObject, function (_ref2) {
  var theme = _ref2.theme;
  return theme.activeBackground;
});

var TooltipArrowLeft = TooltipArrow.extend(_templateObject2, function (_ref3) {
  var theme = _ref3.theme;
  return theme.activeBackground;
});

var TooltipArrowDown = TooltipArrow.extend(_templateObject3, function (_ref4) {
  var theme = _ref4.theme;
  return theme.activeBackground;
});

var TooltipArrowRight = TooltipArrow.extend(_templateObject4, function (_ref5) {
  var theme = _ref5.theme;
  return theme.activeBackground;
});

var TooltipLabel = _styledComponents2.default.span.withConfig({
  displayName: 'TooltipLabel'
})(['', ';position:absolute;padding:0.375rem;border-radius:0.125rem;font-size:0.75rem;line-height:0.75rem;text-align:center;white-space:nowrap;box-shadow:0 1px 3px rgba(0,0,0,0.2),0 1px 2px rgba(0,0,0,0.04);color:', ';background-color:', ';z-index:-1;opacity:0;transition:0.125s all;transition-delay:0.1s;', ':hover &{opacity:1;z-index:5;}'], function (_ref6) {
  var top = _ref6.top,
      right = _ref6.right,
      left = _ref6.left;

  if (top) return topPosition;
  if (right) return rightPosition;
  if (left) return leftPosition;
  return bottomPosition;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.primaryFont;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.activeBackground;
}, TooltipWrapper);

var arrow = function arrow(_ref9) {
  var top = _ref9.top,
      left = _ref9.left,
      right = _ref9.right;

  if (top) return _react2.default.createElement(TooltipArrowDown, { top: true });
  if (left) return _react2.default.createElement(TooltipArrowRight, { left: true });
  if (right) return _react2.default.createElement(TooltipArrowLeft, { right: true });
  return _react2.default.createElement(TooltipArrowUp, null);
};

arrow.propTypes = {
  top: _propTypes2.default.bool,
  left: _propTypes2.default.bool,
  right: _propTypes2.default.bool
};

arrow.defaultProps = {
  top: false,
  left: false,
  right: false
};

var Tooltip = function Tooltip(_ref10) {
  var label = _ref10.label,
      children = _ref10.children,
      top = _ref10.top,
      left = _ref10.left,
      right = _ref10.right,
      props = _objectWithoutProperties(_ref10, ['label', 'children', 'top', 'left', 'right']);

  return _react2.default.createElement(
    TooltipWrapper,
    props,
    _react2.default.createElement(
      TooltipLabel,
      { top: top, left: left, right: right },
      label
    ),
    arrow({ top: top, left: left, right: right }),
    children
  );
};

Tooltip.propTypes = {
  top: _propTypes2.default.bool,
  right: _propTypes2.default.bool,
  left: _propTypes2.default.bool,
  label: _propTypes2.default.string,
  children: _propTypes2.default.element
};

Tooltip.defaultProps = {
  top: false,
  right: false,
  left: false,
  children: null,
  label: 'Tooltip'
};

exports.default = Tooltip;