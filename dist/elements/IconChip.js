'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconChip = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  background-color: ', ';\n  color: ', ';\n\n  padding: 0.375rem 0.5rem 0.25rem;\n  margin: 0.25rem;\n  border-radius: 0.125rem;\n\n  font-size: 0.625rem;\n  font-weight: lighter;\n  letter-spacing: 0.0625rem;\n\n  display: flex;\n\n  img {\n    width: 0.875rem;\n    height: 0.875rem;\n    border-radius: 50%;\n    margin-right: 0.375rem;\n  }\n'], ['\n  background-color: ', ';\n  color: ', ';\n\n  padding: 0.375rem 0.5rem 0.25rem;\n  margin: 0.25rem;\n  border-radius: 0.125rem;\n\n  font-size: 0.625rem;\n  font-weight: lighter;\n  letter-spacing: 0.0625rem;\n\n  display: flex;\n\n  img {\n    width: 0.875rem;\n    height: 0.875rem;\n    border-radius: 50%;\n    margin-right: 0.375rem;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ChipWrapper = _styledComponents2.default.div(_templateObject, function (props) {
  return props.theme.activeBackground;
}, function (props) {
  return props.theme.primaryFont;
});

var IconChip = function IconChip(_ref) {
  var icon = _ref.icon,
      label = _ref.label,
      props = _objectWithoutProperties(_ref, ['icon', 'label']);

  return _react2.default.createElement(
    ChipWrapper,
    props,
    _react2.default.createElement('img', { src: icon, alt: 'Icon' }),
    label
  );
};

exports.IconChip = IconChip;
exports.default = IconChip;