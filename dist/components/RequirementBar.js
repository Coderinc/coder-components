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

var _Paragraph = require('../elements/Paragraph');

var _Paragraph2 = _interopRequireDefault(_Paragraph);

var _Chip = require('../elements/Chip');

var _Chip2 = _interopRequireDefault(_Chip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var BarContainer = _styledComponents2.default.div.withConfig({
  displayName: 'BarContainer'
})(['background-color:', ';color:', ';box-sizing:border-box;border-radius:0.125rem;padding:0.5rem;margin:0.25rem 0;width:100%;display:flex;&::before{font-size:1.5rem;font-family:coder-icons;font-weight:normal;content:\'\f108\';margin-right:0.5rem;}'], function (_ref) {
  var active = _ref.active,
      theme = _ref.theme;
  return active ? theme.activeBackground : theme.offsetBackground;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.primaryFont;
});

var BarContent = _styledComponents2.default.div.withConfig({
  displayName: 'BarContent'
})(['display:flex;flex-direction:column;flex:1;']);

var BarTop = _styledComponents2.default.div.withConfig({
  displayName: 'BarTop'
})(['display:flex;']);

var BarBottom = _styledComponents2.default.div.withConfig({
  displayName: 'BarBottom'
})(['display:flex;flex-wrap:wrap;']);

var Icon = _styledComponents2.default.div.withConfig({
  displayName: 'Icon'
})(['margin:0 0.25rem;&::before{font-size:1.5rem;color:', ';font-family:coder-icons;font-weight:normal;content:\'', '\';}'], function (_ref3) {
  var theme = _ref3.theme;
  return theme.offsetFont;
}, function (_ref4) {
  var content = _ref4.content;
  return content;
});

var Fill = _styledComponents2.default.div.withConfig({
  displayName: 'Fill'
})(['flex:1;']);

var RequirementBar = function RequirementBar(_ref5) {
  var phases = _ref5.phases,
      label = _ref5.label,
      props = _objectWithoutProperties(_ref5, ['phases', 'label']);

  return _react2.default.createElement(
    BarContainer,
    props,
    _react2.default.createElement(
      BarContent,
      null,
      _react2.default.createElement(
        BarTop,
        null,
        _react2.default.createElement(
          _Paragraph2.default,
          null,
          label
        ),
        _react2.default.createElement(Fill, null),
        _react2.default.createElement(Icon, { content: '\\f107' }),
        _react2.default.createElement(Icon, { content: '\\f11f' })
      ),
      _react2.default.createElement(
        BarBottom,
        null,
        phases.map(function (p) {
          return _react2.default.createElement(_Chip2.default, { key: p, label: p });
        })
      )
    )
  );
};

RequirementBar.propTypes = {
  phases: _propTypes2.default.arrayOf(_propTypes2.default.string),
  label: _propTypes2.default.string.isRequired
};

RequirementBar.defaultProps = {
  phases: []
};

exports.default = RequirementBar;