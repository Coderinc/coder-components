'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  width: 100%;\n  padding: 1rem;\n'], ['\n  display: flex;\n  width: 100%;\n  padding: 1rem;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  margin-top: 0.375rem;\n'], ['\n  margin-top: 0.375rem;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  margin: 0 1rem 0 1rem;\n  flex: 1;\n  font-size: 0.75rem;\n'], ['\n  margin: 0 1rem 0 1rem;\n  flex: 1;\n  font-size: 0.75rem;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  color: ', ';\n  font-size: 0.75rem;\n  max-width: 5rem;\n  text-align: right;\n'], ['\n  color: ', ';\n  font-size: 0.75rem;\n  max-width: 5rem;\n  text-align: right;\n']);

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

var CommentWrapper = _styledComponents2.default.div(_templateObject);

var StyledAvatar = (0, _styledComponents2.default)(_Avatar2.default)(_templateObject2);

var Text = _Paragraph2.default.extend(_templateObject3);

var Time = _Paragraph2.default.extend(_templateObject4, function (_ref) {
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
    _react2.default.createElement(StyledAvatar, user),
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
  createdAt: _propTypes2.default.oneOf([_propTypes2.default.object, _propTypes2.default.string]).isRequired
};

exports.default = Comment;