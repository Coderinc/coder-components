'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  padding: 0.25rem 0.5rem;\n  margin: 0.25rem;\n  border-radius: 0.125rem;\n\n  font-size: 0.625rem;\n\n  background-color: ', ';\n  color: ', ';\n'], ['\n  padding: 0.25rem 0.5rem;\n  margin: 0.25rem;\n  border-radius: 0.125rem;\n\n  font-size: 0.625rem;\n\n  background-color: ', ';\n  color: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var phases = {
  Develop: {
    background: 'pink',
    color: 'white'
  },
  Measure: {
    background: 'blue',
    color: 'darkGray'
  },
  Design: {
    background: 'yellow',
    color: 'darkGray'
  },
  Summarize: {
    background: 'orange',
    color: 'darkGray'
  },
  Research: {
    background: 'darkBlue',
    color: 'white'
  },
  Execute: {
    background: 'green',
    color: 'darkGray'
  },
  Model: {
    background: 'red',
    color: 'white'
  },
  Test: {
    background: 'purple',
    color: 'white'
  },
  Maintain: {
    background: 'teal',
    color: 'darkGray'
  }
};

var ChipWrapper = _styledComponents2.default.div(_templateObject, function (_ref) {
  var label = _ref.label,
      theme = _ref.theme;
  return phases[label] ? theme[phases[label].background] : theme.primary;
}, function (_ref2) {
  var label = _ref2.label,
      theme = _ref2.theme;
  return phases[label] ? theme[phases[label].color] : theme.primaryFont;
});

var Chip = function Chip(_ref3) {
  var label = _ref3.label,
      props = _objectWithoutProperties(_ref3, ['label']);

  return _react2.default.createElement(
    ChipWrapper,
    _extends({}, props, { label: label }),
    label
  );
};

Chip.propTypes = {
  label: _propTypes2.default.string
};

Chip.defaultProps = {
  label: 'Phase'
};

exports.default = Chip;