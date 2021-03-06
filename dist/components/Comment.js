'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  margin: 0 1rem 0 1rem;\n  flex: 1;\n'], ['\n  margin: 0 1rem 0 1rem;\n  flex: 1;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  color: ', ';\n  font-size: 0.75rem;\n  max-width: 5rem;\n  text-align: right;\n'], ['\n  color: ', ';\n  font-size: 0.75rem;\n  max-width: 5rem;\n  text-align: right;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _Avatar = require('../elements/Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _Paragraph = require('../elements/Paragraph');

var _Paragraph2 = _interopRequireDefault(_Paragraph);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CommentWrapper = _styledComponents2.default.div.withConfig({
  displayName: 'CommentWrapper'
})(['display:flex;width:100%;padding:1rem;']);

var StyledAvatar = (0, _styledComponents2.default)(_Avatar2.default).withConfig({
  displayName: 'StyledAvatar'
})(['margin-top:0.375rem;']);

var Text = _Paragraph2.default.extend(_templateObject);

var Time = _Paragraph2.default.extend(_templateObject2, function (_ref) {
  var theme = _ref.theme;
  return theme.offsetFont;
});

var Comment = function Comment(_ref2) {
  var user = _ref2.user,
      comment = _ref2.comment,
      createdAt = _ref2.createdAt;
  return _react2.default.createElement(
    CommentWrapper,
    null,
    _react2.default.createElement(StyledAvatar, _extends({}, user, { large: true })),
    _react2.default.createElement(
      Text,
      null,
      comment
    ),
    _react2.default.createElement(
      Time,
      null,
      (0, _moment2.default)(createdAt).calendar()
    )
  );
};

Comment.propTypes = {
  user: _propTypes2.default.object.isRequired,
  comment: _propTypes2.default.string.isRequired,
  createdAt: _propTypes2.default.string.isRequired
};

exports.default = Comment;