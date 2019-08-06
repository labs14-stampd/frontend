import React, { useState } from 'react';
import PropTypes from 'prop-types';

import queries from './queries';
import Field from '../../Field';

const CredentialsForm = ({ history }) => {
  const [credsInputs, setCredsInputs] = useState({
    name: '',
    description: '',
    type: '',
    studentEmail: '',
    imageUrl: '',
    criteria: '',
    issuedOn: '',
    expirationDate: '',
    schoolId: localStorage.id
  });

  const handleChanges = e => {
    setCredsInputs({
      ...credsInputs,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      history.push('/dashboard');
      await queries.addNewCredentials(credsInputs);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Field
        labelText="Name"
        inputName="name"
        placeholder="Enter the name for the credentials"
        onChange={handleChanges}
        inputValue={credsInputs.name}
        required
      />

      <Field
        labelText="Description"
        inputName="description"
        placeholder="Enter a description of the credentials"
        onChange={handleChanges}
        inputValue={credsInputs.description}
        required
      />

      <Field
        labelText="Type"
        inputName="type"
        placeholder="Select the type of crendentials"
        onChange={handleChanges}
        inputValue={credsInputs.type}
        required
      />

      <Field
        labelText="Student's Email Address"
        inputName="studentEmail"
        placeholder="Enter the email address of the student to be credentialed"
        onChange={handleChanges}
        inputValue={credsInputs.studentEmail}
        required
      />

      <Field
        labelText="Image URL "
        inputName="imageUrl"
        placeholder="Enter a URL for an image corresponding to the crendentials"
        onChange={handleChanges}
        inputValue={credsInputs.imageUrl}
        required
      />

      <Field
        labelText="Criteria"
        inputName="criteria"
        placeholder="Enter the criteria for the credentials"
        onChange={handleChanges}
        inputValue={credsInputs.criteria}
        required
      />

      <Field
        labelText="Issue Date"
        inputName="issuedOn"
        placeholder="Enter the issue date for the credentials"
        onChange={handleChanges}
        inputValue={credsInputs.issuedOn}
        required
      />

      <Field
        labelText="Expiration Date"
        inputName="expirationDate"
        placeholder="Enter the expiration date for the credentials"
        onChange={handleChanges}
        inputValue={credsInputs.expirationDate}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

CredentialsForm.propTypes = {
  history: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default CredentialsForm;
