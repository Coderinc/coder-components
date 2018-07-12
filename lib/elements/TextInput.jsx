import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputWrapper = styled.div`
  width: 100%;
  padding: 0.5rem 0;

  display: flex;
  flex-wrap: wrap;
`;

const Img = styled.img`
  width: 2rem;
  height: 2rem;
  margin: 0 1rem;
  margin-top: 0.5rem;
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
  flex: 1;

  &::placeholder {
    color: ${({ theme }) => theme.offsetFont};
  }
`;

const Textarea = styled.textarea`
  background-color: transparent;
  caret-color: ${({ theme }) => theme.primary};
  outline: none;
  border: none;
  font-family: circular;
  font-size: ${({ large }) => (large ? '2.25rem' : '0.875rem')};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'lighter')};
  color: ${({ theme }) => theme.primaryFont};
  letter-spacing: 0.0625rem;
  flex: 1;

  &::placeholder {
    color: ${({ theme }) => theme.offsetFont};
  }
`;

const Error = styled.span`
  color: ${({ theme }) => theme.pink};
  font-size: 0.625rem;
  font-weight: lighter;
  line-height: 1rem;
  width: 100%;
`;

const TextInput = ({
  multiline, icon, meta, ...props
}) => (
  <InputWrapper>
    {icon && <Img src={icon} alt="Icon" />}
    {multiline ? <Textarea {...props} /> : <Input {...props} />}
    <Error>
      {meta.error && meta.touched && meta.visited && !meta.active && meta.error}
    </Error>
  </InputWrapper>
);

TextInput.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  large: PropTypes.bool,
  bold: PropTypes.bool,
  multiline: PropTypes.bool,
  icon: PropTypes.string,
};

TextInput.defaultProps = {
  large: false,
  bold: false,
  multiline: false,
  icon: null,
};

export default TextInput;
