'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultiSelect = exports.SingleSelect = exports.ThemelessMultiSelect = exports.ThemelessSingleSelect = exports.DropdownContainer = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  height: 1.75rem;\n  width: 1rem;\n\n  span {\n    position: absolute;\n    display: flex;\n    align-items: flex-start;\n    color: ', ';\n    font-family: coder-icons;\n    height: 1rem;\n    width: 1rem;\n    bottom: 0;\n\n    &::before {\n      content: \'\f104\';\n    }\n\n    &:first-of-type {\n      top: 0;\n      bottom: auto;\n      transform: scaleY(-1);\n    }\n  }\n'], ['\n  position: relative;\n  height: 1.75rem;\n  width: 1rem;\n\n  span {\n    position: absolute;\n    display: flex;\n    align-items: flex-start;\n    color: ', ';\n    font-family: coder-icons;\n    height: 1rem;\n    width: 1rem;\n    bottom: 0;\n\n    &::before {\n      content: \'\\f104\';\n    }\n\n    &:first-of-type {\n      top: 0;\n      bottom: auto;\n      transform: scaleY(-1);\n    }\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: center;\n\n  span {\n    text-transform: capitalize;\n    max-width: 100%;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n\n  img {\n    width: 1rem;\n    height: 1rem;\n    margin-right: 0.5rem;\n  }\n'], ['\n  display: flex;\n  align-items: center;\n\n  span {\n    text-transform: capitalize;\n    max-width: 100%;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n\n  img {\n    width: 1rem;\n    height: 1rem;\n    margin-right: 0.5rem;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: center;\n\n  span {\n    color: ', ';\n  }\n\n  img {\n    width: 1rem;\n    height: 1rem;\n    margin-right: 0.5rem;\n  }\n'], ['\n  display: flex;\n  align-items: center;\n\n  span {\n    color: ', ';\n  }\n\n  img {\n    width: 1rem;\n    height: 1rem;\n    margin-right: 0.5rem;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: center;\n'], ['\n  display: flex;\n  align-items: center;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var DropdownContainer = exports.DropdownContainer = _styledComponents2.default.div(_templateObject, function (props) {
  return props.theme.offsetFont;
});

var DropdownIcon = function DropdownIcon(props) {
  return _react2.default.createElement(
    DropdownContainer,
    null,
    _react2.default.createElement('span', null),
    _react2.default.createElement('span', null)
  );
};

var DropdownIndicator = function DropdownIndicator(props) {
  return _react2.default.createElement(
    _reactSelect.components.DropdownIndicator,
    props,
    _react2.default.createElement(DropdownIcon, null)
  );
};

var SingleValueContainer = _styledComponents2.default.div(_templateObject2);

var SingleValue = function SingleValue(props) {
  return _react2.default.createElement(
    _reactSelect.components.SingleValue,
    props,
    _react2.default.createElement(
      SingleValueContainer,
      null,
      props.data.icon && _react2.default.createElement('img', {
        alt: 'Icon',
        src: props.data.icon
      }),
      _react2.default.createElement(
        'span',
        null,
        props.data.label
      )
    )
  );
};

var PlaceholderContainer = _styledComponents2.default.div(_templateObject3, function (props) {
  return props.theme.offsetFont;
});

var Placeholder = function Placeholder(props) {
  return _react2.default.createElement(
    _reactSelect.components.Placeholder,
    props,
    _react2.default.createElement(
      PlaceholderContainer,
      null,
      props.icon && _react2.default.createElement('img', {
        alt: 'Icon',
        src: props.icon
      }),
      _react2.default.createElement(
        'span',
        null,
        props.label || 'Select...'
      )
    )
  );
};

var OptionContainer = _styledComponents2.default.div(_templateObject3, function (props) {
  return props.theme.offsetFont;
});

var Option = function Option(props) {
  return _react2.default.createElement(
    _reactSelect.components.Option,
    props,
    _react2.default.createElement(
      OptionContainer,
      null,
      props.data.icon && _react2.default.createElement('img', {
        alt: 'Icon',
        src: props.data.icon
      }),
      _react2.default.createElement(
        'span',
        null,
        props.data.label
      )
    )
  );
};

var MultiValueLabelContainer = _styledComponents2.default.div(_templateObject4);

var MultiValueLabel = function MultiValueLabel(props) {
  return _react2.default.createElement(
    _reactSelect.components.MultiValueLabel,
    props,
    _react2.default.createElement(
      MultiValueLabelContainer,
      null,
      props.icon && _react2.default.createElement('img', {
        alt: 'Icon',
        src: props.icon
      }),
      _react2.default.createElement(
        'span',
        null,
        props.label
      )
    )
  );
};

var MultiValue = function MultiValue(props) {
  return _react2.default.createElement(
    _reactSelect.components.MultiValue,
    props,
    _react2.default.createElement(MultiValueLabel, props.data)
  );
};

var themer = function themer(theme) {
  return {
    container: function container(base) {
      return _extends({}, base, {
        letterSpacing: '0.0625rem',
        fontWeight: '200',
        fontSize: '0.875rem',
        color: theme.primaryFont,
        width: '100%'
      });
    },
    control: function control(base, state) {
      return _extends({}, base, {
        backgroundColor: state.isFocused ? theme.offsetBackground : theme.primaryBackground,
        width: '100%',
        border: 'none',
        boxShadow: 'none',
        cursor: 'text',
        transition: 'none'
      });
    },
    clearIndicator: function clearIndicator(base) {
      return _extends({}, base, {
        color: theme.offsetFont,
        cursor: 'pointer',
        '&:hover': {
          color: theme.primary
        }
      });
    },
    singleValue: function singleValue(base) {
      return _extends({}, base, {
        color: theme.fontColor
      });
    },
    multiValue: function multiValue(base) {
      return _extends({}, base, {
        backgroundColor: theme.activeBackground,
        color: theme.primaryFont,
        img: {
          width: '0.75rem',
          height: '0.75rem',
          marginRight: '0.25rem'
        }
      });
    },
    multiValueLabel: function multiValueLabel(base) {
      return _extends({}, base, {
        color: theme.primaryFont,
        textTransform: 'capitalize'
      });
    },
    multiValueRemove: function multiValueRemove(base) {
      return _extends({}, base, {
        cursor: 'pointer',
        '&:hover': {
          color: theme.primary,
          backgroundColor: theme.activeBackground
        }
      });
    },
    placeholder: function placeholder(base) {
      return _extends({}, base, {
        color: theme.offsetFont
      });
    },
    input: function input(base) {
      return _extends({}, base, {
        color: theme.primaryFont
      });
    },
    menu: function menu(base) {
      return _extends({}, base, {
        backgroundColor: theme.offsetBackground,
        // boxShadow: 'none',
        boxShadow: '0 14px 12px rgba(0,0,0,.25), 0 10px 8px rgba(0,0,0,.22)',
        borderRadius: 0,
        marginTop: '-0.25rem'
      });
    },
    option: function option(base, state) {
      return _extends({}, base, {
        '&:hover': {
          color: theme.primary,
          backgroundColor: theme.activeBackground
        },
        color: state.isSelected ? theme.primary : theme.primaryFont,
        backgroundColor: 'transparent',
        cursor: 'pointer'
      });
    },
    indicatorSeparator: function indicatorSeparator(base) {
      return _extends({}, base, {
        backgroundColor: 'none'
      });
    },
    dropdownIndicator: function dropdownIndicator(base) {
      return _extends({}, base, {
        cursor: 'pointer',
        color: theme.primaryFont,
        '&:hover': {
          color: theme.offsetFont
        }
      });
    }
  };
};

var ThemelessSingleSelect = function ThemelessSingleSelect(_ref) {
  var theme = _ref.theme,
      props = _objectWithoutProperties(_ref, ['theme']);

  return _react2.default.createElement(_reactSelect2.default, _extends({}, props, {
    components: {
      DropdownIndicator: DropdownIndicator,
      SingleValue: SingleValue,
      Option: Option,
      Placeholder: Placeholder
    },
    styles: themer(theme)
  }));
};

exports.ThemelessSingleSelect = ThemelessSingleSelect;
var ThemelessMultiSelect = function ThemelessMultiSelect(_ref2) {
  var theme = _ref2.theme,
      props = _objectWithoutProperties(_ref2, ['theme']);

  return _react2.default.createElement(_reactSelect2.default, _extends({}, props, {
    components: {
      DropdownIndicator: DropdownIndicator,
      Option: Option,
      MultiValue: MultiValue
    },
    isMulti: true,
    styles: themer(theme)
  }));
};

exports.ThemelessMultiSelect = ThemelessMultiSelect;
var SingleSelect = exports.SingleSelect = (0, _styledComponents.withTheme)(ThemelessSingleSelect);
var MultiSelect = exports.MultiSelect = (0, _styledComponents.withTheme)(ThemelessMultiSelect);