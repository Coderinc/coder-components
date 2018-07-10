'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Avatar = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n\n  width: ', ';\n  height: ', ';\n\n  border-radius: 50%;\n'], ['\n  position: relative;\n\n  width: ', ';\n  height: ', ';\n\n  border-radius: 50%;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n'], ['\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  position: absolute;\n  bottom: -0.25rem;\n  left: 50%;\n  transform: translate(-50%, 100%);\n  padding: 0.25rem;\n  border-radius: 0.25rem;\n\n  font-size: 0.625rem;\n  line-height: 0.625rem;\n  text-align: center;\n\n  color: ', ';\n  background-color: ', ';\n  z-index: -1;\n  opacity: 0;\n\n  transition: 0.125s all;\n  transition-delay: 0.1s;\n\n  ', ':hover & {\n    opacity: 1;\n    z-index: 5;\n  }\n'], ['\n  position: absolute;\n  bottom: -0.25rem;\n  left: 50%;\n  transform: translate(-50%, 100%);\n  padding: 0.25rem;\n  border-radius: 0.25rem;\n\n  font-size: 0.625rem;\n  line-height: 0.625rem;\n  text-align: center;\n\n  color: ', ';\n  background-color: ', ';\n  z-index: -1;\n  opacity: 0;\n\n  transition: 0.125s all;\n  transition-delay: 0.1s;\n\n  ', ':hover & {\n    opacity: 1;\n    z-index: 5;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AvatarWrapper = _styledComponents2.default.div(_templateObject, function (props) {
  if (props.large) {
    return '2rem';
  } else if (props.small) {
    return '1rem';
  }
  return '1.5rem';
}, function (props) {
  if (props.large) {
    return '2rem';
  } else if (props.small) {
    return '1rem';
  }
  return '1.5rem';
});

var AvatarImage = _styledComponents2.default.img(_templateObject2);

var AvatarLabel = _styledComponents2.default.span(_templateObject3, function (props) {
  return props.theme.offsetFont;
}, function (props) {
  return props.theme.offsetBackground;
}, AvatarWrapper);

var Avatar = exports.Avatar = function Avatar(props) {
  return _react2.default.createElement(
    AvatarWrapper,
    {
      large: props.large,
      small: props.small
    },
    _react2.default.createElement(AvatarImage, { src: props.icon }),
    _react2.default.createElement(
      AvatarLabel,
      null,
      props.label || props.firstName + ' ' + props.lastName
    )
  );
};

exports.default = Avatar;