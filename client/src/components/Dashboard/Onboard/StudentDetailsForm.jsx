import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { useStateValue } from 'react-conflux';
import { MaskedInput, Select, Box, Heading } from 'grommet';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

import {
  BaseForm,
  BaseTextInput,
  BaseFormField,
  BaseButton
} from '../../../styles/themes';
import queries from './queries';
import {
  globalContext,
  ON_BOARD_DETAILS
} from '../../../store/reducers/globalReducer';
import {
  studentContext,
  SET_STUDENT_DATA
} from '../../../store/reducers/studentReducer';
import CONSTANTS from '../../../store/constants';

const SchoolDetailsForm = ({ history, errors, touched, status }) => {
  const [{ user }, dispatchGlobal] = useStateValue(globalContext);
  const [, dispatchStudent] = useStateValue(studentContext);
  const [input, setInput] = useState({
    firstName: '',
    lastName: '',
    middleName: '',
    street1: '',
    street2: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    userId: user.id
  });

  useEffect(() => {
    if (status) {
      const handleSubmit = async () => {
        try {
          await queries.addRole({
            id: user.id,
            roleId: 3 // Role of a student is set to always be 3
          });
          const details = await queries.addStudentDetail({
            fullName: `${input.firstName} ${input.lastName}`,
            ...input
          });
          dispatchGlobal({
            type: ON_BOARD_DETAILS,
            payload: { ...user, roleId: 3 }
          });
          dispatchStudent({
            type: SET_STUDENT_DATA,
            payload: { ...details }
          });
          localStorage.removeItem('token');
          localStorage.token = details.data.addStudentDetail.token;
          toast.success(`Student Details added succesfully`, {
            className: 'status-ok',
            position: toast.POSITION.BOTTOM_CENTER,
            hideProgressBar: true,
            autoClose: true
          });
          history.push('/dashboard');
        } catch (err) {
          console.error(err);
        }
      };
      handleSubmit();
    }
  }, [status]);

  return (
    <StudentForm>
      <Box direction="column">
        <Heading margin="20px 0 0 0" alignSelf="center">
          Student Register
        </Heading>
        <StudentFormField label="First Name">
          <StudentBaseTextInput
            name="firstName"
            placeholder="Jane"
            component="input"
            type="text"
          />
          {touched.firstName && errors.firstName && (
            <ErrorMessage>{errors.firstName}</ErrorMessage>
          )}
        </StudentFormField>
        <StudentFormField label="Middle Name">
          <StudentBaseTextInput
            name="middleName"
            placeholder="Emily"
            component="input"
            type="text"
          />
          {touched.middleName && errors.middleName && (
            <ErrorMessage>{errors.middleName}</ErrorMessage>
          )}
        </StudentFormField>
        <StudentFormField label="Last Name">
          <StudentBaseTextInput
            name="lastName"
            placeholder="Doe"
            component="input"
            type="text"
          />
          {touched.lastName && errors.lastName && (
            <ErrorMessage>{errors.lastName}</ErrorMessage>
          )}
        </StudentFormField>
        <StudentFormField label="Address 1">
          <StudentBaseTextInput
            name="street1"
            placeholder="123 Fake street"
            component="input"
            type="text"
          />
          {touched.street1 && errors.street1 && (
            <ErrorMessage>{errors.street1}</ErrorMessage>
          )}
        </StudentFormField>
        <StudentFormField label="Address 2">
          <StudentBaseTextInput
            name="street2"
            placeholder="Apt B"
            component="input"
            type="text"
          />
          {touched.street2 && errors.street2 && (
            <ErrorMessage>{errors.street2}</ErrorMessage>
          )}
        </StudentFormField>
        <StudentFormField label="City">
          <StudentBaseTextInput
            name="city"
            placeholder="San Francisco"
            component="input"
            type="text"
          />
          {touched.city && errors.city && (
            <ErrorMessage>{errors.city}</ErrorMessage>
          )}
        </StudentFormField>
        <StudentFormField label="State">
          <StudentBaseTextInput
            name="state"
            component="select"
            placeholder="State"
            type="text"
          >
            {CONSTANTS.states.map(state => (
              <option value={`${state}`} key={state}>
                {state}
              </option>
            ))}
            {touched.state && errors.state && (
              <ErrorMessage>{errors.state}</ErrorMessage>
            )}
          </StudentBaseTextInput>
        </StudentFormField>

        <StudentFormField label="Zip Code">
          <StudentBaseTextInput
            name="zip"
            placeholder="90210"
            component="input"
            type="text"
          />
          {touched.zip && errors.zip && (
            <ErrorMessage>{errors.zip}</ErrorMessage>
          )}
        </StudentFormField>
        <StudentFormField label="Phone Number">
          <StudentBaseTextInput
            type="text"
            placeholder="4151234567"
            component="input"
            name="phone"
          />
          {touched.phone && errors.phone && (
            <ErrorMessage>{errors.phone}</ErrorMessage>
          )}
        </StudentFormField>
        <StudentButton
          type="submit"
          primary
          label="Submit"
          alignSelf="center"
        />
      </Box>
    </StudentForm>
  );
};

SchoolDetailsForm.propTypes = {
  history: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

const StudentDetailsFormWithFormik = withFormik({
  mapPropsToValues({
    firstName,
    lastName,
    middleName,
    street1,
    street2,
    city,
    state,
    zip,
    phone
  }) {
    return {
      firstName: firstName || '',
      lastName: lastName || '',
      middleName: middleName || '',
      street1: street1 || '',
      street2: street2 || '',
      city: city || '',
      state: state || '',
      zip: zip || '',
      phone: phone || ''
    };
  },
  validationSchema: Yup.object().shape({
    firstName: Yup.string().required('First Name is Required'),
    lastName: Yup.string().required('Last Name is Required'),
    middleName: Yup.string(),
    street1: Yup.string(),
    street2: Yup.string(),
    city: Yup.string(),
    state: Yup.string(),
    zip: Yup.string(),
    phone: Yup.string()
      .min(10)
      .max(16)
      .matches(CONSTANTS.phoneRegExp, 'Invalid Phone Number')
  }),
  handleSubmit(values, { setStatus }) {
    setStatus(values);
  }
})(SchoolDetailsForm);

const StudentForm = styled(Form)`
  margin: 120px auto 100px;
  background-color: white;
  border: 1px solid #d8d8d8;
  border-radius: 2px;
  max-width: 800px;
  width: 100%;
`;

const StudentButton = styled(BaseButton)`
  text-align: center;
  margin: 15px 20px 50px;
`;

const StudentBaseTextInput = styled(Field)`
  border: none;
  background: transparent;
  border-bottom: 1px solid black;
  width: 100%;
  max-width: 800px;
  padding: 10px 2.5px;
  font-size: 1.8rem;
  font-weight: 700;
  ::placeholder {
    font-size: 1.6rem;
  }
`;

const StudentFormField = styled(BaseFormField)`
  margin: 20px;
  border-bottom: none;
  div {
    border-bottom: none;
  }
  label {
    margin-left: 2.5px;
  }
`;
const ErrorMessage = styled.p`
  color: red;
  font-size: 1.4rem;
`;

export default StudentDetailsFormWithFormik;
