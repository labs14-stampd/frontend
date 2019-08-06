import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Label = styled.label`
  font-weight: bold;
  color: red;

  ${props => props.required && `
    &::after {
      content: "*";
      color: red;
      margin-left: 5px;
    }
  `}
`;

const Input = styled.input`
  background-color: pink;
`;

const Field = ({
  labelText,
  inputName,
  placeholder,
  onChange,
  inputValue,
  required
}) => {
  return (
    <>
      <Label required={required}>{labelText}</Label>
      <Input
        name={inputName}
        placeholder={placeholder}
        onChange={onChange}
        value={inputValue}
        required={required}
      />
    </>
  );
};

Field.defaultProps = {
  required: false
};

Field.propTypes = {
  label: PropTypes.string,
  inputName: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  required: PropTypes.bool
};

export default Field;