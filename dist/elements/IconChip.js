'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  background-color: ', ';\n  color: ', ';\n\n  padding: 0.375rem 0.5rem 0.25rem;\n  margin: 0.25rem;\n  border-radius: 0.125rem;\n\n  font-size: 0.625rem;\n  font-weight: lighter;\n  letter-spacing: 0.0625rem;\n\n  display: flex;\n\n  img {\n    width: 0.875rem;\n    height: 0.875rem;\n    border-radius: 50%;\n    margin-right: 0.375rem;\n  }\n'], ['\n  background-color: ', ';\n  color: ', ';\n\n  padding: 0.375rem 0.5rem 0.25rem;\n  margin: 0.25rem;\n  border-radius: 0.125rem;\n\n  font-size: 0.625rem;\n  font-weight: lighter;\n  letter-spacing: 0.0625rem;\n\n  display: flex;\n\n  img {\n    width: 0.875rem;\n    height: 0.875rem;\n    border-radius: 50%;\n    margin-right: 0.375rem;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ChipWrapper = _styledComponents2.default.div(_templateObject, function (_ref) {
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