import React from 'react';
import PropTypes from 'prop-types';
import Select, { components as SelectComponents } from 'react-select';
import styled, { withTheme } from 'styled-components';

export const DropdownContainer = styled.div`
  position: relative;
  height: 1.75rem;
  width: 1rem;

  span {
    position: absolute;
    display: flex;
    align-items: flex-start;
    color: ${({ theme }) => theme.offsetFont};
    font-family: coder-icons;
    height: 1rem;
    width: 1rem;
    bottom: 0;

    &::before {
      content: '\f104';
    }

    &:first-of-type {
      top: 0;
      bottom: auto;
      transform: scaleY(-1);
    }
  }
`;

const DropdownIcon = () => (
  <DropdownContainer>
    <span />
    <span />
  </DropdownContainer>
);

const DropdownIndicator = props => (
  <SelectComponents.DropdownIndicator {...props}>
    <DropdownIcon />
  </SelectComponents.DropdownIndicator>
);

const SingleValueContainer = styled.div`
  display: flex;
  align-items: center;

  span {
    text-transform: capitalize;
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  img {
    width: 1rem;
    height: 1rem;
    margin-right: 0.5rem;
  }
`;

const SingleValue = ({ data, ...props }) => (
  <SelectComponents.SingleValue {...props}>
    <SingleValueContainer>
      {data.icon && <img alt="Icon" src={data.icon} />}
      <span>
        {data.label}
      </span>
    </SingleValueContainer>
  </SelectComponents.SingleValue>
);

SingleValue.propTypes = {
  data: PropTypes.object.isRequired,
};

const PlaceholderContainer = styled.div`
  display: flex;
  align-items: center;

  span {
    color: ${({ theme }) => theme.offsetFont};
  }

  img {
    width: 1rem;
    height: 1rem;
    margin-right: 0.5rem;
  }
`;

const Placeholder = ({ icon, label, ...props }) => (
  <SelectComponents.Placeholder {...props}>
    <PlaceholderContainer>
      {icon && <img alt="Icon" src={icon} />}
      <span>
        {label || 'Select...'}
      </span>
    </PlaceholderContainer>
  </SelectComponents.Placeholder>
);

Placeholder.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string,
};

Placeholder.defaultProps = {
  icon: undefined,
  label: '',
};

const OptionContainer = styled.div`
  display: flex;
  align-items: center;

  span {
    color: ${({ theme }) => theme.offsetFont};
  }

  img {
    width: 1rem;
    height: 1rem;
    margin-right: 0.5rem;
  }
`;

const Option = ({ data, ...props }) => (
  <SelectComponents.Option {...props}>
    <OptionContainer>
      {data.icon && <img alt="Icon" src={data.icon} />}
      <span>
        {data.label}
      </span>
    </OptionContainer>
  </SelectComponents.Option>
);

Option.propTypes = {
  data: PropTypes.object.isRequired,
};

const MultiValueLabelContainer = styled.div`
  display: flex;
  align-items: center;
`;

const MultiValueLabel = ({ icon, label, ...props }) => (
  <SelectComponents.MultiValueLabel {...props}>
    <MultiValueLabelContainer>
      {icon && <img alt="Icon" src={icon} />}
      <span>
        {label}
      </span>
    </MultiValueLabelContainer>
  </SelectComponents.MultiValueLabel>
);

MultiValueLabel.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string,
};

MultiValueLabel.defaultProps = {
  icon: undefined,
  label: '',
};

const MultiValue = ({ data, ...props }) => (
  <SelectComponents.MultiValue {...props}>
    <MultiValueLabel {...data} />
  </SelectComponents.MultiValue>
);

MultiValue.propTypes = {
  data: PropTypes.object.isRequired,
};

const themer = theme => ({
  container: base => ({
    ...base,
    letterSpacing: '0.0625rem',
    fontWeight: '200',
    fontSize: '0.875rem',
    color: theme.primaryFont,
    width: '100%',
  }),
  control: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused ? theme.offsetBackground : theme.primaryBackground,
    width: '100%',
    border: 'none',
    boxShadow: 'none',
    cursor: 'text',
    transition: 'none',
  }),
  clearIndicator: base => ({
    ...base,
    color: theme.offsetFont,
    cursor: 'pointer',
    '&:hover': {
      color: theme.primary,
    },
  }),
  singleValue: base => ({
    ...base,
    color: theme.fontColor,
  }),
  multiValue: base => ({
    ...base,
    backgroundColor: theme.activeBackground,
    color: theme.primaryFont,
    img: {
      width: '0.75rem',
      height: '0.75rem',
      marginRight: '0.25rem',
    },
  }),
  multiValueLabel: base => ({
    ...base,
    color: theme.primaryFont,
    textTransform: 'capitalize',
  }),
  multiValueRemove: base => ({
    ...base,
    cursor: 'pointer',
    '&:hover': {
      color: theme.primary,
      backgroundColor: theme.activeBackground,
    },
  }),
  placeholder: base => ({
    ...base,
    color: theme.offsetFont,
  }),
  input: base => ({
    ...base,
    color: theme.primaryFont,
  }),
  menu: base => ({
    ...base,
    backgroundColor: theme.offsetBackground,
    // boxShadow: 'none',
    boxShadow: '0 14px 12px rgba(0,0,0,.25), 0 10px 8px rgba(0,0,0,.22)',
    borderRadius: 0,
    marginTop: '-0.25rem',
  }),
  option: (base, state) => ({
    ...base,
    '&:hover': {
      color: theme.primary,
      backgroundColor: theme.activeBackground,
    },
    color: state.isSelected ? theme.primary : theme.primaryFont,
    backgroundColor: 'transparent',
    cursor: 'pointer',
  }),
  indicatorSeparator: base => ({
    ...base,
    backgroundColor: 'none',
  }),
  dropdownIndicator: base => ({
    ...base,
    cursor: 'pointer',
    color: theme.primaryFont,
    '&:hover': {
      color: theme.offsetFont,
    },
  }),
});

export const ThemelessSingleSelect = ({ theme, ...props }) => (
  <Select
    {...props}
    components={{
      DropdownIndicator,
      SingleValue,
      Option,
      Placeholder,
    }}
    styles={themer(theme)}
  />
);

ThemelessSingleSelect.propTypes = {
  theme: PropTypes.object.isRequired,
};

export const ThemelessMultiSelect = ({ theme, ...props }) => (
  <Select
    {...props}
    components={{
      DropdownIndicator,
      Option,
      MultiValue,
    }}
    isMulti
    styles={themer(theme)}
  />
);

ThemelessMultiSelect.propTypes = {
  theme: PropTypes.object.isRequired,
};

export const SingleSelect = withTheme(ThemelessSingleSelect);
export const MultiSelect = withTheme(ThemelessMultiSelect);
