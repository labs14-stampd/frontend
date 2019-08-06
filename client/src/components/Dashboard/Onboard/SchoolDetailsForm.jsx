import React, { useState } from 'react';
import PropTypes from 'prop-types';

import queries from './queries';
import Field from '../../Field';

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
      console.log(err);
    }

    history.push('/dashboard');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Field
        labelText="Name of Institution"
        inputName="name"
        placeholder="Name of Institution"
        onChange={handleChanges}
        inputValue={input.name}
        required
      />

      <Field
        labelText="TaxId"
        inputName="taxId"
        placeholder="TaxId"
        onChange={handleChanges}
        inputValue={input.taxId}
        required
      />
      <Field
        labelText="Address 1"
        inputName="street1"
        placeholder="Address 1"
        onChange={handleChanges}
        inputValue={input.street1}
      />
      <Field
        labelText="Address 2"
        inputName="street2"
        placeholder="Address 2"
        onChange={handleChanges}
        inputValue={input.street2}
      />
      <Field
        labelText="City"
        inputName="city"
        placeholder="City"
        onChange={handleChanges}
        inputValue={input.city}
      />
      <Field
        labelText="State"
        inputName="state"
        placeholder="State"
        onChange={handleChanges}
        inputValue={input.state}
      />
      <Field
        labelText="Zip Code"
        inputName="zip"
        placeholder="Zip Code"
        onChange={handleChanges}
        inputValue={input.zip}
      />
      <Field
        labelText="Phone Number"
        inputName="phone"
        placeholder="Phone Number"
        onChange={handleChanges}
        inputValue={input.phone}
        required
      />
      <Field
        labelText="Type of Institution"
        inputName="type"
        placeholder="Type of Institution"
        onChange={handleChanges}
        inputValue={input.type}
      />
      <Field
        labelText="Institution Website"
        inputName="url"
        placeholder="Institution Website"
        onChange={handleChanges}
        inputValue={input.url}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

SchoolDetailsForm.propTypes = {
  history: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default SchoolDetailsForm;
