import React from 'react';
import styled from 'styled-components';

const Field = ({
  labelText,
  inputName,
  placeholder,
  onChange,
  inputValue,
  required = false
}) => {
  const Label = styled.label`
    font-weight: bold;
    color: red;

    ${required &&
      `
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

  return (
    <>
      <Label>{labelText}</Label>
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

export default Field;