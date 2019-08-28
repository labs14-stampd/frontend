import React, { useEffect } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { useStateValue } from 'react-conflux';
import { Box } from 'grommet';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

import queries from '../queries';
import { BaseFormField, BaseButton } from '../../../styles/themes';
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
    <>
      <StudentForm>
        <Box direction="row">
          <Box direction="column" width="50%">
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
            ​
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
          </Box>
          <Box direction="column" width="50%">
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
            ​
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
        </Box>
      </StudentForm>
    </>
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

const StudentForm = styled(Form)`
  margin: 50px auto 10px;
  max-width: 800px;
  width: 100%;
`;

const StudentButton = styled(BaseButton)`
  text-align: center;
  margin: 15px 20px 50px;
`;

const StudentBaseTextInput = styled(Field)`
  border: none;
`;

const StudentFormField = styled(BaseFormField)`
  margin: 20px;
  border-bottom: none;
  input {
    /* margin-bottom: 10px; */
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 1.4rem;
`;

export default DetailSettingsWithFormik;
