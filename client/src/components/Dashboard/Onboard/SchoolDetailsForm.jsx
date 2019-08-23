import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { useStateValue } from 'react-conflux';
import { MaskedInput, Select, Box, Heading } from 'grommet';
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
    <SchoolForm onSubmit={handleSubmit}>
      <Box direction="column">
        <Heading margin="20px 0 0 0" alignSelf="center">
          School Register
        </Heading>
        <SchoolFormField label="Institution">
          <SchoolBaseTextInput
            name="name"
            placeholder="Lambda School"
            onChange={handleChanges}
            value={input.name}
            plain={false}
            required
          />
        </SchoolFormField>
        <SchoolFormField label="Tax Id">
          <SchoolBaseTextInput
            labelText="TaxId"
            name="taxId"
            placeholder="TaxId"
            onChange={handleChanges}
            value={input.taxId}
            required
          />
        </SchoolFormField>
        <SchoolFormField label="Address 1">
          <SchoolBaseTextInput
            name="street1"
            placeholder="123 Fake street"
            onChange={handleChanges}
            value={input.street1}
          />
        </SchoolFormField>
        <SchoolFormField label="Address 2">
          <SchoolBaseTextInput
            name="street2"
            placeholder="Apt B"
            onChange={handleChanges}
            value={input.street2}
          />
        </SchoolFormField>
        <SchoolFormField label="City">
          <SchoolBaseTextInput
            name="city"
            placeholder="San Francisco"
            onChange={handleChanges}
            value={input.city}
          />
        </SchoolFormField>
        <SchoolFormField
          label="State"
          name="state"
          component={Select}
          options={c.states}
          onChange={({ option }) => setInput({ ...input, state: option })}
          value={input.state}
          placeholder="State"
        />
        <SchoolFormField label="Zip Code">
          <SchoolBaseTextInput
            name="zip"
            placeholder="90210"
            onChange={handleChanges}
            value={input.zip}
          />
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
          <SchoolBaseTextInput
            name="type"
            placeholder="University"
            onChange={handleChanges}
            value={input.type}
          />
        </SchoolFormField>
        <SchoolFormField label="Institution Website">
          <SchoolBaseTextInput
            labelText="Institution Website"
            name="url"
            placeholder="ls.dev"
            onChange={handleChanges}
            value={input.url}
            required
          />
        </SchoolFormField>
        <SchoolButton type="submit" primary label="Submit" alignSelf="center" />
      </Box>
    </SchoolForm>
  );
};

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

export default SchoolDetailsForm;
