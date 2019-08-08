import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MaskedInput, Select, Box, Heading } from 'grommet';

import {
  BaseForm,
  BaseTextInput,
  BaseFormField,
  BaseButton
} from '../../../styles/themes';

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
    <Container>
      <section>
        <h2>Issue Credential</h2>
        <BaseForm onSubmit={handleSubmit}>
          <Box>
            <BaseFormField>
              <BaseTextInput
                inputName="name"
                placeholder="Enter the name for the credentials"
                onChange={handleChanges}
                inputValue={credsInputs.name}
                required
              />
            </BaseFormField>
            <BaseFormField>
              <BaseTextInput
                inputName="description"
                placeholder="Enter a description of the credentials"
                onChange={handleChanges}
                inputValue={credsInputs.description}
                required
              />
            </BaseFormField>
            <BaseFormField>
              <BaseTextInput
                inputName="type"
                placeholder="Select the type of crendentials"
                onChange={handleChanges}
                inputValue={credsInputs.type}
                required
              />
            </BaseFormField>
            <BaseFormField>
              <BaseTextInput
                inputName="studentEmail"
                placeholder="Enter the email address of the student to be credentialed"
                onChange={handleChanges}
                inputValue={credsInputs.studentEmail}
                required
              />
            </BaseFormField>
            <BaseFormField>
              <BaseTextInput
                inputName="imageUrl"
                placeholder="Enter a URL for an image corresponding to the crendentials"
                onChange={handleChanges}
                inputValue={credsInputs.imageUrl}
                required
              />
            </BaseFormField>
            <BaseFormField>
              <BaseTextInput
                inputName="criteria"
                placeholder="Enter the criteria for the credentials"
                onChange={handleChanges}
                inputValue={credsInputs.criteria}
                required
              />
            </BaseFormField>
            <BaseFormField>
              <BaseTextInput
                inputName="issuedOn"
                placeholder="Enter the issue date for the credentials"
                onChange={handleChanges}
                inputValue={credsInputs.issuedOn}
                required
              />
            </BaseFormField>
            <BaseFormField>
              <BaseTextInput
                inputName="expirationDate"
                placeholder="Enter the expiration date for the credentials"
                onChange={handleChanges}
                inputValue={credsInputs.expirationDate}
              />
            </BaseFormField>
            <BaseButton
              type="submit"
              primary
              label="Submit"
              alignSelf="center"
            />
          </Box>
        </BaseForm>
      </section>
    </Container>
  );
};

CredentialsForm.propTypes = {
  history: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  padding: 120px 3% 0;
  position: relative;

  section {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 375px;
    height: 100vh;
    background: ${props => props.theme.global.colors.dashBoardBg};
    padding: 120px 3% 0;
    border-left: 1px solid ${props => props.theme.global.colors.dashBoardBorder};
    overflow-x: hidden;
    overflow-y: auto;

    h2 {
      width: 100%;
      text-align: center;
      margin-bottom: 37px;
    }
    form {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
  }
`;

export default CredentialsForm;
