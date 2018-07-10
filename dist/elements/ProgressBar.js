'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProgressBar = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  background-color: ', ';\n\n  height: 0.75rem;\n  width: 100%;\n\n  border-radius: 0.375rem;\n'], ['\n  background-color: ', ';\n\n  height: 0.75rem;\n  width: 100%;\n\n  border-radius: 0.375rem;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  background-color: ', ';\n\n  height: 100%;\n  width: ', '%;\n\n  border-radius: 0.5rem;\n\n  transition: width 0.25s linear;\n'], ['\n  background-color: ', ';\n\n  height: 100%;\n  width: ', '%;\n\n  border-radius: 0.5rem;\n\n  transition: width 0.25s linear;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ProgressWrapper = _styledComponents2.default.div(_templateObject, function (props) {
  return props.theme.offsetBackground;
});

var Progress = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.theme.primary;
}, function (props) {
  return props.percent || 0;
});

var ProgressBar = exports.ProgressBar = function ProgressBar(props) {
  return _react2.default.createElement(
    ProgressWrapper,
    null,
    _react2.default.createElement(Progress, props)
  );
};

exports.default = ProgressBar;