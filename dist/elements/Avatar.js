'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  width: ', ';\n  height: ', ';\n\n  border-radius: 50%;\n'], ['\n  width: ', ';\n  height: ', ';\n\n  border-radius: 50%;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n'], ['\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Tooltip = require('./Tooltip');

var _Tooltip2 = _interopRequireDefault(_Tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AvatarWrapper = _styledComponents2.default.div(_templateObject, function (_ref) {
  var large = _ref.large,
      small = _ref.small;

  if (large) {
    return '2rem';
  }
  if (small) {
    return '1rem';
  }
  return '1.5rem';
}, function (_ref2) {
  var large = _ref2.large,
      small = _ref2.small;

  if (large) {
    return '2rem';
  }
  if (small) {
    return '1rem';
  }
  return '1.5rem';
});

var AvatarImage = _styledComponents2.default.img(_templateObject2);

var Avatar = function Avatar(_ref3) {
  var large = _ref3.large,
      small = _ref3.small,
      icon = _ref3.icon,
      label = _ref3.label,
      firstName = _ref3.firstName,
      lastName = _ref3.lastName,
      props = _objectWithoutProperties(_ref3, ['large', 'small', 'icon', 'label', 'firstName', 'lastName']);

  return _react2.default.createElement(
    AvatarWrapper,
    _extends({ large: large, small: small }, props),
    _react2.default.createElement(
      _Tooltip2.default,
      { label: label || firstName + ' ' + lastName },
      _react2.default.createElement(AvatarImage, { src: icon, alt: label || firstName })
    )
  );
};

Avatar.propTypes = {
  large: _propTypes2.default.bool,
  small: _propTypes2.default.bool,
  icon: _propTypes2.default.string,
  label: _propTypes2.default.string,
  firstName: _propTypes2.default.string,
  lastName: _propTypes2.default.string
};

Avatar.defaultProps = {
  large: false,
  small: false,
  label: null,
  firstName: 'Joe',
  lastName: 'Schmoe',
  icon: null
};

exports.default = Avatar;