'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PhaseBar = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  background-color: ', ';\n  color: ', ';\n\n  display: flex;\n  align-items: center;\n\n  box-sizing: border-box;\n  width: 100%;\n  margin: 0.25rem 0;\n  padding: 0.5rem;\n  border-radius: 0.25rem;\n\n  &::before {\n    font-size: 1.5rem;\n    font-family: coder-icons;\n    font-weight: normal;\n    content: \'\f108\';\n    margin-right: 0.5rem;\n  }\n'], ['\n  background-color: ', ';\n  color: ', ';\n\n  display: flex;\n  align-items: center;\n\n  box-sizing: border-box;\n  width: 100%;\n  margin: 0.25rem 0;\n  padding: 0.5rem;\n  border-radius: 0.25rem;\n\n  &::before {\n    font-size: 1.5rem;\n    font-family: coder-icons;\n    font-weight: normal;\n    content: \'\\f108\';\n    margin-right: 0.5rem;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  flex: 1;\n'], ['\n  flex: 1;\n']);

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

var Fill = _styledComponents2.default.div(_templateObject2);

var PhaseBar = function PhaseBar(_ref) {
  var label = _ref.label,
      phase = _ref.phase,
      props = _objectWithoutProperties(_ref, ['label', 'phase']);

  return _react2.default.createElement(
    BarContainer,
    props,
    _react2.default.createElement(
      _Paragraph2.default,
      null,
      label
    ),
    _react2.default.createElement(Fill, null),
    _react2.default.createElement(_Chip2.default, { label: phase })
  );
};

exports.PhaseBar = PhaseBar;
exports.default = PhaseBar;