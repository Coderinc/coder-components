'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RequirementBar = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  background-color: ', ';\n  color: ', ';\n\n  box-sizing: border-box;\n  border-radius: 0.125rem;\n  padding: 0.5rem;\n  margin: 0.25rem 0;\n  width: 100%;\n\n  display: flex;\n\n  &::before {\n    font-size: 1.5rem;\n    font-family: coder-icons;\n    font-weight: normal;\n    content: \'\f108\';\n    margin-right: 0.5rem;\n  }\n'], ['\n  background-color: ', ';\n  color: ', ';\n\n  box-sizing: border-box;\n  border-radius: 0.125rem;\n  padding: 0.5rem;\n  margin: 0.25rem 0;\n  width: 100%;\n\n  display: flex;\n\n  &::before {\n    font-size: 1.5rem;\n    font-family: coder-icons;\n    font-weight: normal;\n    content: \'\\f108\';\n    margin-right: 0.5rem;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n'], ['\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  display: flex;\n'], ['\n  display: flex;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  display: flex;\n  flex-wrap: wrap;\n'], ['\n  display: flex;\n  flex-wrap: wrap;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  margin: 0 0.25rem;\n  &::before {\n    font-size: 1.5rem;\n    color: ', ';\n    font-family: coder-icons;\n    font-weight: normal;\n    content: \'', '\';\n  }\n'], ['\n  margin: 0 0.25rem;\n  &::before {\n    font-size: 1.5rem;\n    color: ', ';\n    font-family: coder-icons;\n    font-weight: normal;\n    content: \'', '\';\n  }\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  flex: 1;\n'], ['\n  flex: 1;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Paragraph = require('../elements/Paragraph');

var _Paragraph2 = _interopRequireDefault(_Paragraph);

var _Chip = require('../elements/Chip');

var _Chip2 = _interopRequireDefault(_Chip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BarContainer = _styledComponents2.default.div(_templateObject, function (props) {
  return props.active ? props.theme.activeBackground : props.theme.offsetBackground;
}, function (props) {
  return props.theme.primaryFont;
});

var BarContent = _styledComponents2.default.div(_templateObject2);

var BarTop = _styledComponents2.default.div(_templateObject3);

var BarBottom = _styledComponents2.default.div(_templateObject4);

var Icon = _styledComponents2.default.div(_templateObject5, function (props) {
  return props.theme.offsetFont;
}, function (props) {
  return props.content;
});

var Fill = _styledComponents2.default.div(_templateObject6);

var RequirementBar = function RequirementBar(_ref) {
  var _ref$phases = _ref.phases,
      phases = _ref$phases === undefined ? [] : _ref$phases,
      label = _ref.label,
      props = _objectWithoutProperties(_ref, ['phases', 'label']);

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

exports.RequirementBar = RequirementBar;
exports.default = RequirementBar;