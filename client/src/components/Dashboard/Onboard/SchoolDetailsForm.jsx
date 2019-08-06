import React, { useState } from 'react';
import PropTypes from 'prop-types';

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
    <BaseForm onSubmit={handleSubmit}>
      <BaseFormField label="Institution">
        <BaseTextInput
          name="name"
          placeholder="Name of Institution"
          onChange={handleChanges}
          value={input.name}
          plain={false}
          required
        />
      </BaseFormField>
      <BaseFormField label="Tax Id">
        <BaseTextInput
          labelText="TaxId"
          name="taxId"
          placeholder="TaxId"
          onChange={handleChanges}
          value={input.taxId}
          required
        />
      </BaseFormField>
      <BaseFormField label="Address 1">
        <BaseTextInput
          name="street1"
          placeholder="Address 1"
          onChange={handleChanges}
          value={input.street1}
        />
      </BaseFormField>
      <BaseFormField label="Address 2">
        <BaseTextInput
          name="street2"
          placeholder="Address 2"
          onChange={handleChanges}
          value={input.street2}
        />
      </BaseFormField>
      <BaseFormField label="City">
        <BaseTextInput
          name="city"
          placeholder="City"
          onChange={handleChanges}
          value={input.city}
        />
      </BaseFormField>
      <BaseFormField label="State">
        <BaseTextInput
          name="state"
          placeholder="State"
          onChange={handleChanges}
          value={input.state}
        />
      </BaseFormField>
      <BaseFormField label="Zip Code">
        <BaseTextInput
          name="zip"
          placeholder="Zip Code"
          onChange={handleChanges}
          value={input.zip}
        />
      </BaseFormField>
      <BaseFormField label="Phone Number">
        <BaseTextInput
          name="phone"
          placeholder="Phone Number"
          onChange={handleChanges}
          value={input.phone}
          required
        />
      </BaseFormField>
      <BaseFormField label="Type of Institution">
        <BaseTextInput
          name="type"
          placeholder="Type of Institution"
          onChange={handleChanges}
          value={input.type}
        />
      </BaseFormField>
      <BaseFormField label="Institution Website">
        <BaseTextInput
          labelText="Institution Website"
          name="url"
          placeholder="Institution Website"
          onChange={handleChanges}
          value={input.url}
          required
        />
      </BaseFormField>
      <button type="submit">Submit</button>
    </BaseForm>
  );
};

SchoolDetailsForm.propTypes = {
  history: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default SchoolDetailsForm;
