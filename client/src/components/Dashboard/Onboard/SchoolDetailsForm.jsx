import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { useStateValue } from 'react-conflux';
import { MaskedInput, Select, Box, Heading } from 'grommet';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

import c from '../../../store/constants';

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

const SchoolDetailsForm = ({ history }) => {
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

  return (
    <Form>
      <Box direction="column">
        <Heading margin="20px 0 0 0" alignSelf="center">
          School Register
        </Heading>
        <SchoolFormField label="Institution">
          <Field
            component="input"
            type="text"
            name="name"
            placeholder="Lambda School"
          />
        </SchoolFormField>
        <SchoolFormField label="Tax Id">
          <Field
            component="input"
            type="text"
            name="taxId"
            placeholder="TaxId"
          />
        </SchoolFormField>
        <SchoolFormField label="Address 1">
          <Field
            component="input"
            type="text"
            name="street1"
            placeholder="123 Fake street"
          />
        </SchoolFormField>
        <SchoolFormField label="Address 2">
          <Field
            component="input"
            type="text"
            name="street2"
            placeholder="Apt B"
          />
        </SchoolFormField>
        <SchoolFormField label="City">
          <Field
            component="input"
            type="text"
            name="city"
            placeholder="San Francisco"
          />
        </SchoolFormField>
        <SchoolFormField
          label="State"
          type="text"
          name="state"
          component={Select}
          options={c.states}
          onChange={({ option }) => setInput({ ...input, state: option })}
          value={input.state}
          placeholder="State"
        />
        <SchoolFormField label="Zip Code">
          <Field component="input" type="text" name="zip" placeholder="90210" />
        </SchoolFormField>
        <SchoolFormField label="Phone Number">
          <SchoolMaskedInput
            mask={[
              { fixed: '(' },
              {
                length: 3,
                regexp: /^[0-9]{1,3}$/,
                placeholder: 'xxx'
              },
              { fixed: ')' },
              { fixed: ' ' },
              {
                length: 3,
                regexp: /^[0-9]{1,3}$/,
                placeholder: 'xxx'
              },
              { fixed: '-' },
              {
                length: 4,
                regexp: /^[0-9]{1,4}$/,
                placeholder: 'xxxx'
              }
            ]}
            value={input.phone}
            name="phone"
            onChange={handleChanges}
            required
          />
        </SchoolFormField>
        <SchoolFormField label="Type of Institution">
          <Field
            component="input"
            type="text"
            name="type"
            placeholder="University"
          />
        </SchoolFormField>
        <SchoolFormField label="Institution Website">
          <Field
            component="input"
            type="text"
            name="url"
            placeholder="ls.dev"
          />
        </SchoolFormField>
        <SchoolButton type="submit" primary label="Submit" alignSelf="center" />
      </Box>
    </Form>
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
    phone: Yup.string().required(),
    type: Yup.string(),
    url: Yup.string().required()
  }),

  handleSubmit(values, { setStatus }) {
    setStatus(values);
  }
})(SchoolDetailsForm);

SchoolDetailsForm.propTypes = {
  history: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

const SchoolForm = styled(BaseForm)`
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

const SchoolBaseTextInput = styled(BaseTextInput)`
  border: none;
`;

const SchoolFormField = styled(BaseFormField)`
  margin: 20px;
  border-bottom: none;
  input {
    /* margin-bottom: 10px; */
  }
`;

const SchoolMaskedInput = styled(MaskedInput)`
  /* border: ${({ theme }) => theme.global.border}; */
`;

export default SchoolDetailsFormWithFormik;
