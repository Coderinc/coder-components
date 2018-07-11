'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  height: 100%;\n  padding: 0.25rem;\n  box-sizing: border-box;\n'], ['\n  width: 100%;\n  height: 100%;\n  padding: 0.25rem;\n  box-sizing: border-box;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  background: ', ';\n  color: ', ';\n\n  display: flex;\n  align-items: center;\n  height: 100%;\n\n  box-sizing: border-box;\n  border-radius: 0.125rem;\n  padding: 1.5rem;\n\n  font-size: 0.75rem;\n  font-weight: lighter;\n  letter-spacing: 0.0625rem;\n  text-transform: ', ';\n\n  cursor: ', ';\n'], ['\n  background: ', ';\n  color: ', ';\n\n  display: flex;\n  align-items: center;\n  height: 100%;\n\n  box-sizing: border-box;\n  border-radius: 0.125rem;\n  padding: 1.5rem;\n\n  font-size: 0.75rem;\n  font-weight: lighter;\n  letter-spacing: 0.0625rem;\n  text-transform: ', ';\n\n  cursor: ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  flex: 1;\n  display: flex;\n  align-items: center;\n\n  img {\n    width: 2rem;\n    max-height: 1.75rem;\n  }\n'], ['\n  flex: 1;\n  display: flex;\n  align-items: center;\n\n  img {\n    width: 2rem;\n    max-height: 1.75rem;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  flex: 2;\n'], ['\n  flex: 2;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TileWrapper = _styledComponents2.default.div(_templateObject);

var TileContainer = _styledComponents2.default.div(_templateObject2, function (_ref) {
  var active = _ref.active,
      theme = _ref.theme;
  return active ? theme.activeBackground : theme.offsetBackground;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.primaryFont;
}, function (_ref3) {
  var regularCase = _ref3.regularCase;
  return regularCase ? undefined : 'capitalize';
}, function (_ref4) {
  var disabled = _ref4.disabled;
  return disabled ? 'auto' : 'pointer';
});

var TileIcon = _styledComponents2.default.div(_templateObject3);

var TextContainer = _styledComponents2.default.span(_templateObject4);

var Tile = function Tile(_ref5) {
  var active = _ref5.active,
      onClick = _ref5.onClick,
      value = _ref5.value,
      icon = _ref5.icon,
      label = _ref5.label;
  return _react2.default.createElement(
    TileWrapper,
    null,
    _react2.default.createElement(
      TileContainer,
      { active: active, onClick: onClick ? function () {
          return onClick(value);
        } : undefined },
      icon && _react2.default.createElement(
        TileIcon,
        null,
        _react2.default.createElement('img', { alt: 'Icon', src: icon })
      ),
      _react2.default.createElement(
        TextContainer,
        null,
        label
      )
    )
  );
};

Tile.propTypes = {
  active: _propTypes2.default.bool,
  onClick: _propTypes2.default.func,
  value: _propTypes2.default.oneOf([_propTypes2.default.number, _propTypes2.default.string]),
  icon: _propTypes2.default.string,
  label: _propTypes2.default.string
};

Tile.defaultProps = {
  active: false,
  onClick: undefined,
  value: null,
  icon: null,
  label: null
};

exports.default = Tile;