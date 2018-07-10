'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Slider = exports.RangeSlider = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcSlider = require('rc-slider');

var _rcSlider2 = _interopRequireDefault(_rcSlider);

var _styledComponents = require('styled-components');

require('rc-slider/assets/index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var rangeSliderStyle = function rangeSliderStyle(theme) {
  return {
    railStyle: {
      backgroundColor: theme.offsetBackground
    },
    dotStyle: {
      display: 'none'
    },
    activeDotStyle: {
      backgroundColor: theme.primary,
      borderColor: theme.primaryBackground,
      borderWidth: 2
    },
    trackStyle: [{
      backgroundColor: theme.primary
    }],
    handleStyle: [{
      backgroundColor: theme.primary,
      borderColor: theme.primaryBackground
    }, {
      backgroundColor: theme.primary,
      borderColor: theme.primaryBackground
    }]
  };
};

var sliderStyle = function sliderStyle(theme) {
  return {
    railStyle: {
      backgroundColor: theme.primary
    },
    dotStyle: {
      display: 'none'
    },
    activeDotStyle: {
      backgroundColor: theme.primary,
      borderColor: theme.primaryBackground,
      borderWidth: 2
    },
    trackStyle: [{
      backgroundColor: theme.primary
    }],
    handleStyle: [{
      backgroundColor: theme.primary,
      borderColor: theme.primaryBackground
    }, {
      backgroundColor: theme.primary,
      borderColor: theme.primaryBackground
    }]
  };
};

var markStyle = function markStyle(theme, index, active) {
  if (index !== 0 && index !== 10 && !active) {
    return { display: 'none' };
  }
  return {
    color: active ? theme.primaryFont : theme.offsetFont
  };
};

var ThemelessRangeSlider = function (_React$Component) {
  _inherits(ThemelessRangeSlider, _React$Component);

  function ThemelessRangeSlider(props) {
    _classCallCheck(this, ThemelessRangeSlider);

    var _this = _possibleConstructorReturn(this, (ThemelessRangeSlider.__proto__ || Object.getPrototypeOf(ThemelessRangeSlider)).call(this, props));

    var _props$minValue = props.minValue,
        minValue = _props$minValue === undefined ? 0 : _props$minValue,
        _props$maxValue = props.maxValue,
        maxValue = _props$maxValue === undefined ? 10 : _props$maxValue;

    _this.marks = {};
    var delta = Math.round((maxValue - minValue) / 10);
    for (var i = 0; i < 11; i += 1) {
      var val = minValue + i * delta;
      _this.marks[val] = {
        label: '' + val,
        style: markStyle(props.theme, i, false)
      };
    }
    return _this;
  }

  _createClass(ThemelessRangeSlider, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          _props$minValue2 = _props.minValue,
          minValue = _props$minValue2 === undefined ? 0 : _props$minValue2,
          _props$maxValue2 = _props.maxValue,
          maxValue = _props$maxValue2 === undefined ? 10 : _props$maxValue2,
          _props$input = _props.input,
          input = _props$input === undefined ? { value: ['1', '2'] } : _props$input,
          theme = _props.theme;


      var marks = {};
      Object.keys(this.marks).forEach(function (k, i) {
        marks[k] = _extends({}, _this2.marks[k], {
          style: markStyle(theme, i, input.value.includes(+k))
        });
      });

      return _react2.default.createElement(_rcSlider2.default.Range, _extends({
        defaultValue: input.value || [],
        marks: marks,
        max: maxValue,
        min: minValue,
        onChange: input.onChange,
        step: null,
        style: { margin: '1rem 0' },
        value: input.value
      }, rangeSliderStyle(theme)));
    }
  }]);

  return ThemelessRangeSlider;
}(_react2.default.Component);

var ThemelessSlider = function (_React$Component2) {
  _inherits(ThemelessSlider, _React$Component2);

  function ThemelessSlider(props) {
    _classCallCheck(this, ThemelessSlider);

    var _this3 = _possibleConstructorReturn(this, (ThemelessSlider.__proto__ || Object.getPrototypeOf(ThemelessSlider)).call(this, props));

    var _props$minValue3 = props.minValue,
        minValue = _props$minValue3 === undefined ? 0 : _props$minValue3,
        _props$maxValue3 = props.maxValue,
        maxValue = _props$maxValue3 === undefined ? 10 : _props$maxValue3;

    _this3.marks = {};
    var delta = Math.round((maxValue - minValue) / 10);
    for (var i = 0; i < 11; i += 1) {
      var val = minValue + i * delta;
      _this3.marks[val] = {
        label: '' + val,
        style: markStyle(props.theme, i, false)
      };
    }
    return _this3;
  }

  _createClass(ThemelessSlider, [{
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props2 = this.props,
          _props2$minValue = _props2.minValue,
          minValue = _props2$minValue === undefined ? 0 : _props2$minValue,
          _props2$maxValue = _props2.maxValue,
          maxValue = _props2$maxValue === undefined ? 10 : _props2$maxValue,
          _props2$input = _props2.input,
          input = _props2$input === undefined ? { value: 5 } : _props2$input,
          theme = _props2.theme;


      var marks = {};
      Object.keys(this.marks).forEach(function (k, i) {
        marks[k] = _extends({}, _this4.marks[k], {
          style: markStyle(theme, i, input.value === +k)
        });
      });

      return _react2.default.createElement(_rcSlider2.default, _extends({
        defaultValue: input.value || minValue,
        marks: marks,
        max: maxValue,
        min: minValue,
        onChange: input.onChange,
        step: null,
        style: { margin: '1rem 0' },
        value: input.value
      }, sliderStyle(theme)));
    }
  }]);

  return ThemelessSlider;
}(_react2.default.Component);

var RangeSlider = exports.RangeSlider = (0, _styledComponents.withTheme)(ThemelessRangeSlider);
var Slider = exports.Slider = (0, _styledComponents.withTheme)(ThemelessSlider);