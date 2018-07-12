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

var TileWrapper = _styledComponents2.default.div.withConfig({
  displayName: 'TileWrapper'
})(['width:100%;height:100%;padding:0.25rem;box-sizing:border-box;']);

var TileContainer = _styledComponents2.default.div.withConfig({
  displayName: 'TileContainer'
})(['background:', ';color:', ';display:flex;align-items:center;height:100%;box-sizing:border-box;border-radius:0.125rem;padding:1.5rem;font-size:0.75rem;font-weight:lighter;letter-spacing:0.0625rem;text-transform:', ';cursor:', ';'], function (_ref) {
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

var TileIcon = _styledComponents2.default.div.withConfig({
  displayName: 'TileIcon'
})(['flex:1;display:flex;align-items:center;img{width:2rem;max-height:1.75rem;}']);

var TextContainer = _styledComponents2.default.span.withConfig({
  displayName: 'TextContainer'
})(['flex:2;']);

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