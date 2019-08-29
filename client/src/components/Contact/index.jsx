import React from 'react';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {
  BaseForm,
  BaseTextInput,
  BaseFormField,
  BaseButton
} from '../../styles/themes';
// Subtract pixels to prevent unnecessary vertical scrollbar (accounts for fixed nav bar at the top and other elements)
const Container = styled.main`
  min-height: calc(100vh - 200px);
  margin: 125px 7.5% 0;
`;

const StudentForm = styled(BaseForm)`
  margin: 120px auto 100px;
  background-color: white;
  border: 1px solid #d8d8d8;
  border-radius: 2px;
  max-width: 800px;
  width: 100%;
`;

function ContactPage({ background }) {
  return (
    <div>
      <h1>Any place in your app!</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => {
          let errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <StudentForm>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </StudentForm>
        )}
      </Formik>
    </div>
  );
}

export default ContactPage;
