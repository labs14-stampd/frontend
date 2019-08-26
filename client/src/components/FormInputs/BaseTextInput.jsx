import React from 'react';
import { useField, ErrorMessage } from 'formik';

import { BaseTextInput as TextInput } from '../../styles/themes';

const BaseTextInput = ({ name, ...props }) => {
  const [field, { touched, error }] = useField(name);
  console.log('touched', touched);
  console.log('error', error);
  return (
    <>
      <TextInput {...field} {...props} />
      <ErrorMessage name={`${name}`} />
      {/* {touched[`${name}`] && error[`${name}`] && <p>{error.size}</p>} */}
    </>
  );
};

export default BaseTextInput;
