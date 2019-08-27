import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { useStateValue } from 'react-conflux';
import { MaskedInput, Box, Heading } from 'grommet';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

import CONSTANTS from '../../../store/constants';

import {
  BaseForm,
  BaseTextInput,
  BaseFormField,
  BaseButton
} from '../../../styles/themes';
import {
  schoolContext,
  SET_SCHOOL_DATA
} from '../../../store/reducers/schoolReducer';
import queries from './queries';
import {
  globalContext,
  ON_BOARD_DETAILS
} from '../../../store/reducers/globalReducer';

const SchoolDetailsForm = ({ history, errors, touched, status }) => {
  const [{ user }, dispatchGlobal] = useStateValue(globalContext);
  const [, schoolDispatch] = useStateValue(schoolContext);
  const [input, setInput] = useState({
    name: '',
    taxId: '',
    street1: '',
    street2: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    type: '',
    url: '',
    userId: user.id
  });
  const handleChanges = e => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
    if (status) {
      const handleSubmit = async e => {
        e.preventDefault();
        try {
          await queries.addRole({
            id: user.id,
            roleId: '2' // Role of a school is set to always be 2
          });
          const details = await queries.addSchoolDetails(input);
          dispatchGlobal({
            type: ON_BOARD_DETAILS,
            payload: { ...user, roleId: 2 }
          });
          schoolDispatch({
            type: SET_SCHOOL_DATA,
            payload: { ...details }
          });
          localStorage.removeItem('token');
          localStorage.token = details.data.addSchoolDetail.token;
          toast.success(`School Details added succesfully`, {
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
    <SchoolForm>
      <Box direction="column">
        <Heading margin="20px 0 0 0" alignSelf="center">
          School Register
        </Heading>
        <SchoolFormField label="Institution">
          <SchoolBaseTextInput
            component="input"
            type="text"
            name="name"
            placeholder="Lambda School"
          />
          {touched.name && errors.name && (
            <ErrorMessage>{errors.name}</ErrorMessage>
          )}
        </SchoolFormField>
        <SchoolFormField label="Tax Id">
          <SchoolBaseTextInput
            component="input"
            type="text"
            name="taxId"
            placeholder="TaxId"
          />
          {touched.taxId && errors.taxId && (
            <ErrorMessage>{errors.taxId}</ErrorMessage>
          )}
        </SchoolFormField>
        <SchoolFormField label="Address 1">
          <SchoolBaseTextInput
            component="input"
            type="text"
            name="street1"
            placeholder="123 Fake street"
          />
          {touched.street1 && errors.street1 && (
            <ErrorMessage>{errors.street1}</ErrorMessage>
          )}
        </SchoolFormField>
        <SchoolFormField label="Address 2">
          <SchoolBaseTextInput
            component="input"
            type="text"
            name="street2"
            placeholder="Apt B"
          />
          {touched.street2 && errors.street2 && (
            <ErrorMessage>{errors.street2}</ErrorMessage>
          )}
        </SchoolFormField>
        <SchoolFormField label="City">
          <SchoolBaseTextInput
            component="input"
            type="text"
            name="city"
            placeholder="San Francisco"
          />
          {touched.city && errors.city && (
            <ErrorMessage>{errors.city}</ErrorMessage>
          )}
        </SchoolFormField>
        <SchoolFormField label="State">
          <SchoolBaseTextInput
            type="text"
            name="state"
            component="select"
            placeholder="State"
          >
            {CONSTANTS.states.map(state => (
              <option value={`${state}`} key={state}>
                {state}
              </option>
            ))}
            {touched.state && errors.state && (
              <ErrorMessage>{errors.state}</ErrorMessage>
            )}
          </SchoolBaseTextInput>
        </SchoolFormField>
        <SchoolFormField label="Zip Code">
          <SchoolBaseTextInput component="input" type="text" name="zip" placeholder="90210" />
        </SchoolFormField>
        <SchoolFormField label="Phone Number">
          <SchoolBaseTextInput
            type="text"
            placeholder="4151234567"
            component="input"
            name="phone"
          />
          {touched.phone && errors.phone && (
            <ErrorMessage>{errors.phone}</ErrorMessage>
          )}
        </SchoolFormField>
        <SchoolFormField label="Type of Institution">
          <SchoolBaseTextInput
            component="input"
            type="text"
            name="type"
            placeholder="University"
          />
          {touched.type && errors.type && (
            <ErrorMessage>{errors.type}</ErrorMessage>
          )}
        </SchoolFormField>
        <SchoolFormField label="Institution Website">
          <SchoolBaseTextInput
            component="input"
            type="text"
            name="url"
            placeholder="ls.dev"
          />
          {touched.url && errors.url && (
            <ErrorMessage>{errors.url}</ErrorMessage>
          )}
        </SchoolFormField>
        <SchoolButton type="submit" primary label="Submit" alignSelf="center" />
      </Box>
    </SchoolForm>
  );
};

// formik HOC

const SchoolDetailsFormWithFormik = withFormik({
  mapPropsToValues({
    name,
    taxId,
    street1,
    street2,
    city,
    state,
    zip,
    phone,
    type,
    url
  }) {
    return {
      name: name || '',
      taxId: taxId || '',
      street1: street1 || '',
      street2: street2 || '',
      city: city || '',
      state: state || '',
      zip: zip || '',
      phone: phone || '',
      type: type || '',
      url: url || ''
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    taxId: Yup.string().required(),
    street1: Yup.string(),
    street2: Yup.string(),
    city: Yup.string(),
    state: Yup.string(),
    zip: Yup.string(),
    phone: Yup.string()
      .min(10)
      .max(16)
      .matches(CONSTANTS.phoneRegExp, 'Invalid phone number')
      .required(),
    type: Yup.string(),
    url: Yup.string()
      .url()
      .required()
  }),

  handleSubmit(values, { setStatus }) {
    setStatus(values);
  }
})(SchoolDetailsForm);

SchoolDetailsForm.propTypes = {
  history: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

const ErrorMessage = styled.p`
  color: red;
  font-size: 1.4rem;
`;

const SchoolForm = styled(Form)`
  margin: 120px auto 100px;
  background-color: white;
  border: 1px solid #d8d8d8;
  border-radius: 2px;
  max-width: 800px;
  width: 100%;
`;

const SchoolButton = styled(BaseButton)`
  text-align: center;
  margin: 15px 20px 50px;
`;

const SchoolBaseTextInput = styled(Field)`
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

const SchoolFormField = styled(BaseFormField)`
  margin: 20px;
  border-bottom: none;
  div {
    border-bottom: none;
  }
  label {
    margin-left: 2.5px;
  }
`;

export default SchoolDetailsFormWithFormik;
