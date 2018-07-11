'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n\n  width: ', ';\n  height: ', ';\n\n  border-radius: 50%;\n'], ['\n  position: relative;\n\n  width: ', ';\n  height: ', ';\n\n  border-radius: 50%;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n'], ['\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  position: absolute;\n  bottom: -0.25rem;\n  left: 50%;\n  transform: translate(-50%, 100%);\n  padding: 0.25rem;\n  border-radius: 0.25rem;\n\n  font-size: 0.625rem;\n  line-height: 0.625rem;\n  text-align: center;\n\n  color: ', ';\n  background-color: ', ';\n  z-index: -1;\n  opacity: 0;\n\n  transition: 0.125s all;\n  transition-delay: 0.1s;\n\n  ', ':hover & {\n    opacity: 1;\n    z-index: 5;\n  }\n'], ['\n  position: absolute;\n  bottom: -0.25rem;\n  left: 50%;\n  transform: translate(-50%, 100%);\n  padding: 0.25rem;\n  border-radius: 0.25rem;\n\n  font-size: 0.625rem;\n  line-height: 0.625rem;\n  text-align: center;\n\n  color: ', ';\n  background-color: ', ';\n  z-index: -1;\n  opacity: 0;\n\n  transition: 0.125s all;\n  transition-delay: 0.1s;\n\n  ', ':hover & {\n    opacity: 1;\n    z-index: 5;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

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

var AvatarLabel = _styledComponents2.default.span(_templateObject3, function (_ref3) {
  var theme = _ref3.theme;
  return theme.offsetFont;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.offsetBackground;
}, AvatarWrapper);

var Avatar = function Avatar(_ref5) {
  var large = _ref5.large,
      small = _ref5.small,
      icon = _ref5.icon,
      label = _ref5.label,
      firstName = _ref5.firstName,
      lastName = _ref5.lastName,
      props = _objectWithoutProperties(_ref5, ['large', 'small', 'icon', 'label', 'firstName', 'lastName']);

  return _react2.default.createElement(
    AvatarWrapper,
    _extends({ large: large, small: small }, props),
    _react2.default.createElement(AvatarImage, { src: icon }),
    _react2.default.createElement(
      AvatarLabel,
      null,
      label || firstName + ' ' + lastName
    )
  );
};

Avatar.propTypes = {
  large: _propTypes2.default.bool,
  small: _propTypes2.default.bool,
  icon: _propTypes2.default.string.isRequired,
  label: _propTypes2.default.string,
  firstName: _propTypes2.default.string,
  lastName: _propTypes2.default.string
};

Avatar.defaultProps = {
  large: false,
  small: false,
  label: undefined,
  firstName: 'Joe',
  lastName: 'Schmoe'
};

exports.default = Avatar;