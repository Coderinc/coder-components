'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _raf = require('raf');

var _raf2 = _interopRequireDefault(_raf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AnimatedNumber = function (_React$Component) {
  _inherits(AnimatedNumber, _React$Component);

  function AnimatedNumber(props) {
    _classCallCheck(this, AnimatedNumber);

    var _this = _possibleConstructorReturn(this, (AnimatedNumber.__proto__ || Object.getPrototypeOf(AnimatedNumber)).call(this, props));

    _this.state = {
      currentNumber: 0
    };

    _this.confirmSixtyFPS = _this.confirmSixtyFPS.bind(_this);
    _this.prepTween = _this.prepTween.bind(_this);
    _this.endTween = _this.endTween.bind(_this);
    _this.tweenValue = _this.tweenValue.bind(_this);
    return _this;
  }

  _createClass(AnimatedNumber, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.prepTween();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var currentNumber = this.state.currentNumber;
      var number = this.props.number;

      if (currentNumber === number) {
        return;
      }
      if (prevProps.number === number) {
        return;
      }
      if (this.tweenHandler) {
        this.endTween();
      }

      this.prepTween();
    }
  }, {
    key: 'confirmSixtyFPS',
    value: function confirmSixtyFPS(timestamp) {
      var lastTimestamp = this.state.lastTimestamp;

      return !lastTimestamp || timestamp - lastTimestamp > 16;
    }
  }, {
    key: 'prepTween',
    value: function prepTween() {
      var _this2 = this;

      this.tweenHandler = (0, _raf2.default)(function (timestamp) {
        _this2.tweenValue(timestamp, true);
      });
    }
  }, {
    key: 'endTween',
    value: function endTween() {
      _raf2.default.cancel(this.tweenHandler);
    }
  }, {
    key: 'tweenValue',
    value: function tweenValue(timestamp) {
      var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (!this.confirmSixtyFPS(timestamp)) {
        this.tweenHandler = (0, _raf2.default)(this.tweenValue);
        return;
      }

      var _props = this.props,
          number = _props.number,
          duration = _props.duration;
      var _state = this.state,
          currentNumber = _state.currentNumber,
          startTime = _state.startTime,
          fromNumber = _state.fromNumber;

      var validatedStartTime = start ? timestamp : startTime;
      var validatedFromNumber = start ? currentNumber : fromNumber;

      var newNumber = void 0;
      if (timestamp - startTime >= duration) {
        newNumber = number;
      } else {
        newNumber = fromNumber + (number - fromNumber) * ((timestamp - startTime) / duration);
      }

      if (newNumber === number) {
        this.endTween();
        this.setState({
          currentNumber: number
        });
        return;
      }

      this.setState({
        currentNumber: newNumber,
        startTime: validatedStartTime || timestamp,
        fromNumber: validatedFromNumber,
        lastTimestamp: timestamp
      });
      this.tweenHandler = (0, _raf2.default)(this.tweenValue);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          noDecimal = _props2.noDecimal,
          format = _props2.format,
          component = _props2.component;
      var currentNumber = this.state.currentNumber;

      var displayValue = noDecimal ? Math.round(currentNumber) : currentNumber;

      var C = component;
      var formattedValue = format ? format(displayValue) : displayValue;

      if (C) {
        return _react2.default.createElement(
          C,
          null,
          formattedValue
        );
      }

      return _react2.default.createElement(
        'span',
        null,
        formattedValue
      );
    }
  }]);

  return AnimatedNumber;
}(_react2.default.Component);

AnimatedNumber.propTypes = {
  number: _propTypes2.default.number,
  duration: _propTypes2.default.number,
  noDecimal: _propTypes2.default.bool,
  format: _propTypes2.default.func,
  component: _propTypes2.default.element
};

AnimatedNumber.defaultProps = {
  number: 0,
  duration: 250,
  noDecimal: false,
  format: undefined,
  component: undefined
};

exports.default = AnimatedNumber;