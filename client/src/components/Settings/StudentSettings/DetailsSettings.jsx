import React, { useEffect } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { useStateValue } from 'react-conflux';
import { Box, Button } from 'grommet';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

import queries from '../queries';
import { BaseFormField } from '../../../styles/themes';
import { globalContext } from '../../../store/reducers/globalReducer';
import CONSTANTS from '../../../store/constants';
import {
  studentContext,
  SET_STUDENT_DATA
} from '../../../store/reducers/studentReducer';

const DetailSettings = ({ errors, touched, status }) => {
  const [{ user }] = useStateValue(globalContext);
  const [studentState, dispatchStudent] = useStateValue(studentContext);

  useEffect(() => {
    if (status) {
      const handleSubmit = async () => {
        try {
          const details = await queries.updateStudentDetail({
            fullName: `${status.firstName} ${status.lastName}`,
            ...status,
            userId: user.id,
            id: studentState.studentData.studentDetails.id
          });
          dispatchStudent({
            type: SET_STUDENT_DATA,
            payload: { ...details }
          });
          toast.success(`Student Details updated succesfully`, {
            className: 'status-ok',
            position: toast.POSITION.BOTTOM_CENTER,
            hideProgressBar: true,
            autoClose: true
          });
        } catch (err) {
          console.error(err);
        }
      };
      handleSubmit();
    }
  }, [status]);

  return (
    <Container>
      <Form>
        <Box direction="column">
          <Field label="First Name">
            <input
              name="firstName"
              placeholder="Jane"
              component="input"
              type="text"
            />
            {touched.firstName && errors.firstName && (
              <ErrorMessage>{errors.firstName}</ErrorMessage>
            )}
          </Field>
          <Field label="Middle Name">
            <input
              name="middleName"
              placeholder="Emily"
              component="input"
              type="text"
            />
            {touched.middleName && errors.middleName && (
              <ErrorMessage>{errors.middleName}</ErrorMessage>
            )}
          </Field>
          <Field label="Last Name">
            <input
              name="lastName"
              placeholder="Doe"
              component="input"
              type="text"
            />
            {touched.lastName && errors.lastName && (
              <ErrorMessage>{errors.lastName}</ErrorMessage>
            )}
          </Field>
          ​
          <Field label="Address 1">
            <input
              name="street1"
              placeholder="123 Fake street"
              component="input"
              type="text"
            />
            {touched.street1 && errors.street1 && (
              <ErrorMessage>{errors.street1}</ErrorMessage>
            )}
          </Field>
          <Field label="Address 2">
            <input
              name="street2"
              placeholder="Apt B"
              component="input"
              type="text"
            />
            {touched.street2 && errors.street2 && (
              <ErrorMessage>{errors.street2}</ErrorMessage>
            )}
          </Field>
          <Field label="City">
            <input
              name="city"
              placeholder="San Francisco"
              component="input"
              type="text"
            />
            {touched.city && errors.city && (
              <ErrorMessage>{errors.city}</ErrorMessage>
            )}
          </Field>
          <Field label="State">
            <input
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
            </input>
          </Field>
          <Field label="Zip Code">
            <input
              name="zip"
              placeholder="90210"
              component="input"
              type="text"
            />
            {touched.zip && errors.zip && (
              <ErrorMessage>{errors.zip}</ErrorMessage>
            )}
          </Field>
          <Field label="Phone Number">
            <input
              type="text"
              placeholder="4151234567"
              component="input"
              name="phone"
            />
            {touched.phone && errors.phone && (
              <ErrorMessage>{errors.phone}</ErrorMessage>
            )}
          </Field>
          <Button type="submit" primary label="Submit" alignSelf="center" />
        </Box>
      </Form>
    </Container>
  );
};

const DetailSettingsWithFormik = withFormik({
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
    firstName: Yup.string(),
    lastName: Yup.string(),
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
})(DetailSettings);

const Container = styled.div`
  form {
    margin: 120px auto 100px;
    max-width: 800px;
    width: 100%;

    input {
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
    }

    button {
      text-align: center;
      margin: 15px 20px 50px;
    }
  }
`;

// const StudentFormField = styled(BaseFormField)`
//   margin: 20px;
//   border-bottom: none;
//   div {
//     border-bottom: none;
//   }
//   label {
//     margin-left: 2.5px;
//   }
// `;

const ErrorMessage = styled.p`
  color: red;
  font-size: 1.4rem;
`;

export default DetailSettingsWithFormik;
