'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tile = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  height: 100%;\n  padding: 0.25rem;\n  box-sizing: border-box;\n'], ['\n  width: 100%;\n  height: 100%;\n  padding: 0.25rem;\n  box-sizing: border-box;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  background: ', ';\n  color: ', ';\n\n  display: flex;\n  align-items: center;\n  height: 100%;\n\n  box-sizing: border-box;\n  border-radius: 0.125rem;\n  padding: 1.5rem;\n\n  font-size: 0.75rem;\n  font-weight: lighter;\n  letter-spacing: 0.0625rem;\n  text-transform: ', ';\n\n  cursor: ', ';\n'], ['\n  background: ', ';\n  color: ', ';\n\n  display: flex;\n  align-items: center;\n  height: 100%;\n\n  box-sizing: border-box;\n  border-radius: 0.125rem;\n  padding: 1.5rem;\n\n  font-size: 0.75rem;\n  font-weight: lighter;\n  letter-spacing: 0.0625rem;\n  text-transform: ', ';\n\n  cursor: ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  flex: 1;\n  display: flex;\n  align-items: center;\n\n  img {\n    width: 2rem;\n    max-height: 1.75rem;\n  }\n'], ['\n  flex: 1;\n  display: flex;\n  align-items: center;\n\n  img {\n    width: 2rem;\n    max-height: 1.75rem;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  flex: 2;\n'], ['\n  flex: 2;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TileWrapper = _styledComponents2.default.div(_templateObject);

var TileContainer = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.active ? props.theme.activeBackground : props.theme.offsetBackground;
}, function (props) {
  return props.theme.primaryFont;
}, function (props) {
  return props.regularCase ? undefined : 'capitalize';
}, function (props) {
  return props.disabled ? 'auto' : 'pointer';
});

var TileIcon = _styledComponents2.default.div(_templateObject3);

var TextContainer = _styledComponents2.default.span(_templateObject4);

var Tile = exports.Tile = function Tile(props) {
  return _react2.default.createElement(
    TileWrapper,
    null,
    _react2.default.createElement(
      TileContainer,
      {
        active: props.active,
        onClick: props.onClick ? function () {
          return props.onClick(props.value);
        } : undefined
      },
      props.icon && _react2.default.createElement(
        TileIcon,
        null,
        _react2.default.createElement('img', { src: props.icon, alt: 'Icon' })
      ),
      _react2.default.createElement(
        TextContainer,
        null,
        props.label
      )
    )
  );
};

exports.default = Tile;