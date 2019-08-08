import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MaskedInput } from 'grommet';

import { BaseForm, BaseTextInput, BaseFormField } from '../../../styles/themes';
import queries from './queries';

const SchoolDetailsForm = ({ history }) => {
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
    userId: localStorage.id
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
      await queries.addSchoolDetails(input);
      await queries.addRole({
        id: localStorage.id,
        roleId: 2 // Role of a school is set to always be 2
      });
    } catch (err) {
      console.error(err);
    }

    history.push('/dashboard');
  };
  return (
    <SchoolForm onSubmit={handleSubmit}>
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
          placeholder="Address 1"
          onChange={handleChanges}
          value={input.street1}
        />
      </SchoolFormField>
      <SchoolFormField label="Address 2">
        <SchoolBaseTextInput
          name="street2"
          placeholder="Address 2"
          onChange={handleChanges}
          value={input.street2}
        />
      </SchoolFormField>
      <SchoolFormField label="City">
        <SchoolBaseTextInput
          name="city"
          placeholder="City"
          onChange={handleChanges}
          value={input.city}
        />
      </SchoolFormField>
      <SchoolFormField label="State">
        <SchoolBaseTextInput
          name="state"
          placeholder="State"
          onChange={handleChanges}
          value={input.state}
        />
      </SchoolFormField>
      <SchoolFormField label="Zip Code">
        <SchoolBaseTextInput
          name="zip"
          placeholder="Zip Code"
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
          placeholder="Type of Institution"
          onChange={handleChanges}
          value={input.type}
        />
      </SchoolFormField>
      <SchoolFormField label="Institution Website">
        <SchoolBaseTextInput
          labelText="Institution Website"
          name="url"
          placeholder="Institution Website"
          onChange={handleChanges}
          value={input.url}
          required
        />
      </SchoolFormField>
      <button type="submit">Submit</button>
    </SchoolForm>
  );
};

SchoolDetailsForm.propTypes = {
  history: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

const SchoolForm = styled(BaseForm)`
  margin: 120px auto 50px;
  background-color: white;
  border: 1px solid #d8d8d8;
  border-radius: 2px;
  max-width: 800px;
  width: 100%;
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
