import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputWrapper = styled.div`
  width: 100%;
  padding: 0.5rem 0;
`;

const Input = styled.input`
  background-color: transparent;
  caret-color: ${({ theme }) => theme.primary};
  outline: none;
  border: none;
  font-family: circular;
  font-size: ${({ large }) => (large ? '2.25rem' : '0.875rem')};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'lighter')};
  color: ${({ theme }) => theme.primaryFont};
  letter-spacing: 0.0625rem;
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.offsetFont};
  }
`;

const Error = styled.span`
  color: ${({ theme }) => theme.pink};
  font-size: 0.625rem;
  font-weight: lighter;
  line-height: 1rem;
`;

const TextInput = ({ meta, ...props }) => (
  <InputWrapper>
    <Input {...props} />
    <Error>
      {meta.error && meta.touched && meta.visited && !meta.active && (
        meta.error
      )}
    </Error>
  </InputWrapper>
);

TextInput.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  large: PropTypes.bool,
  bold: PropTypes.bool,
};

TextInput.defaultProps = {
  large: false,
  bold: false,
};

export default TextInput;
