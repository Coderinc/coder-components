'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMotion = require('react-motion');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProgressWrapper = _styledComponents2.default.div.withConfig({
  displayName: 'ProgressWrapper'
})(['background-color:', ';height:0.75rem;width:100%;border-radius:0.375rem;'], function (_ref) {
  var theme = _ref.theme;
  return theme.offsetBackground;
});

var Progress = _styledComponents2.default.div.withConfig({
  displayName: 'Progress'
})(['background-color:', ';height:100%;border-radius:0.5rem;'], function (_ref2) {
  var theme = _ref2.theme;
  return theme.primary;
});

var ProgressBar = function (_React$Component) {
  _inherits(ProgressBar, _React$Component);

  function ProgressBar() {
    _classCallCheck(this, ProgressBar);

    return _possibleConstructorReturn(this, (ProgressBar.__proto__ || Object.getPrototypeOf(ProgressBar)).apply(this, arguments));
  }

  _createClass(ProgressBar, [{
    key: 'render',
    value: function render() {
      var percent = this.props.percent;


      return _react2.default.createElement(
        ProgressWrapper,
        this.props,
        _react2.default.createElement(
          _reactMotion.Motion,
          { style: { percent: (0, _reactMotion.spring)(percent) } },
          function (_ref3) {
            var percent = _ref3.percent;
            return _react2.default.createElement(Progress, { style: { width: percent + '%' } });
          }
        )
      );
    }
  }]);

  return ProgressBar;
}(_react2.default.Component);

// const ProgressBar = ({ percent, ...props }) => (
//   <ProgressWrapper {...props}>
//     <Motion defaultStyle={{ >
//       <Progress percent={percent} />
//     </Motion>
//   </ProgressWrapper>
// );

ProgressBar.propTypes = {
  percent: _propTypes2.default.number
};

ProgressBar.defaultProps = {
  percent: 0
};

exports.default = ProgressBar;