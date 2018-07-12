'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultiSelect = exports.SingleSelect = exports.ThemelessMultiSelect = exports.ThemelessSingleSelect = exports.DropdownContainer = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var DropdownContainer = exports.DropdownContainer = _styledComponents2.default.div.withConfig({
  displayName: 'DropdownContainer'
})(['position:relative;height:1.75rem;width:1rem;span{position:absolute;display:flex;align-items:flex-start;color:', ';font-family:coder-icons;height:1rem;width:1rem;bottom:0;&::before{content:\'\f104\';}&:first-of-type{top:0;bottom:auto;transform:scaleY(-1);}}'], function (_ref) {
  var theme = _ref.theme;
  return theme.offsetFont;
});

var DropdownIcon = function DropdownIcon() {
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

var SingleValueContainer = _styledComponents2.default.div.withConfig({
  displayName: 'SingleValueContainer'
})(['display:flex;align-items:center;span{text-transform:capitalize;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}img{width:1rem;height:1rem;margin-right:0.5rem;}']);

var SingleValue = function SingleValue(_ref2) {
  var data = _ref2.data,
      props = _objectWithoutProperties(_ref2, ['data']);

  return _react2.default.createElement(
    _reactSelect.components.SingleValue,
    props,
    _react2.default.createElement(
      SingleValueContainer,
      null,
      data.icon && _react2.default.createElement('img', { alt: 'Icon', src: data.icon }),
      _react2.default.createElement(
        'span',
        null,
        data.label
      )
    )
  );
};

SingleValue.propTypes = {
  data: _propTypes2.default.object.isRequired
};

var PlaceholderContainer = _styledComponents2.default.div.withConfig({
  displayName: 'PlaceholderContainer'
})(['display:flex;align-items:center;span{color:', ';}img{width:1rem;height:1rem;margin-right:0.5rem;}'], function (_ref3) {
  var theme = _ref3.theme;
  return theme.offsetFont;
});

var Placeholder = function Placeholder(_ref4) {
  var icon = _ref4.icon,
      label = _ref4.label,
      props = _objectWithoutProperties(_ref4, ['icon', 'label']);

  return _react2.default.createElement(
    _reactSelect.components.Placeholder,
    props,
    _react2.default.createElement(
      PlaceholderContainer,
      null,
      icon && _react2.default.createElement('img', { alt: 'Icon', src: icon }),
      _react2.default.createElement(
        'span',
        null,
        label || 'Select...'
      )
    )
  );
};

Placeholder.propTypes = {
  icon: _propTypes2.default.string,
  label: _propTypes2.default.string
};

Placeholder.defaultProps = {
  icon: undefined,
  label: ''
};

var OptionContainer = _styledComponents2.default.div.withConfig({
  displayName: 'OptionContainer'
})(['display:flex;align-items:center;span{color:', ';}img{width:1rem;height:1rem;margin-right:0.5rem;}'], function (_ref5) {
  var theme = _ref5.theme;
  return theme.offsetFont;
});

var Option = function Option(_ref6) {
  var data = _ref6.data,
      props = _objectWithoutProperties(_ref6, ['data']);

  return _react2.default.createElement(
    _reactSelect.components.Option,
    props,
    _react2.default.createElement(
      OptionContainer,
      null,
      data.icon && _react2.default.createElement('img', { alt: 'Icon', src: data.icon }),
      _react2.default.createElement(
        'span',
        null,
        data.label
      )
    )
  );
};

Option.propTypes = {
  data: _propTypes2.default.object.isRequired
};

var MultiValueLabelContainer = _styledComponents2.default.div.withConfig({
  displayName: 'MultiValueLabelContainer'
})(['display:flex;align-items:center;']);

var MultiValueLabel = function MultiValueLabel(_ref7) {
  var icon = _ref7.icon,
      label = _ref7.label,
      props = _objectWithoutProperties(_ref7, ['icon', 'label']);

  return _react2.default.createElement(
    _reactSelect.components.MultiValueLabel,
    props,
    _react2.default.createElement(
      MultiValueLabelContainer,
      null,
      icon && _react2.default.createElement('img', { alt: 'Icon', src: icon }),
      _react2.default.createElement(
        'span',
        null,
        label
      )
    )
  );
};

MultiValueLabel.propTypes = {
  icon: _propTypes2.default.string,
  label: _propTypes2.default.string
};

MultiValueLabel.defaultProps = {
  icon: undefined,
  label: ''
};

var MultiValue = function MultiValue(_ref8) {
  var data = _ref8.data,
      props = _objectWithoutProperties(_ref8, ['data']);

  return _react2.default.createElement(
    _reactSelect.components.MultiValue,
    props,
    _react2.default.createElement(MultiValueLabel, data)
  );
};

MultiValue.propTypes = {
  data: _propTypes2.default.object.isRequired
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

var ThemelessSingleSelect = function ThemelessSingleSelect(_ref9) {
  var theme = _ref9.theme,
      props = _objectWithoutProperties(_ref9, ['theme']);

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
ThemelessSingleSelect.propTypes = {
  theme: _propTypes2.default.object.isRequired
};

var ThemelessMultiSelect = function ThemelessMultiSelect(_ref10) {
  var theme = _ref10.theme,
      props = _objectWithoutProperties(_ref10, ['theme']);

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
ThemelessMultiSelect.propTypes = {
  theme: _propTypes2.default.object.isRequired
};

var SingleSelect = exports.SingleSelect = (0, _styledComponents.withTheme)(ThemelessSingleSelect);
var MultiSelect = exports.MultiSelect = (0, _styledComponents.withTheme)(ThemelessMultiSelect);