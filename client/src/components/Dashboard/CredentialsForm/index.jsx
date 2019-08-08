import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MaskedInput, Select, Box, Heading, TextArea } from 'grommet';

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
            <BaseFormField label="Name of Student">
              <BaseTextInput
                name="ownerName"
                placeholder="Jane Doe"
                onChange={handleChanges}
                value={credsInputs.ownerName}
                required
              />
            </BaseFormField>
            <BaseFormField label="Name of Student">
              <BaseTextInput
                name="credName"
                placeholder="Masters in Philopsophy"
                onChange={handleChanges}
                value={credsInputs.credName}
                required
              />
            </BaseFormField>
            <BaseFormField label="Type">
              <BaseTextInput
                name="type"
                placeholder="Masters, PhD, Cert, etc."
                onChange={handleChanges}
                value={credsInputs.type}
                required
              />
            </BaseFormField>
            <BaseFormField label="Description">
              <TextArea
                name="description"
                placeholder="Summary of credential"
                onChange={handleChanges}
                value={credsInputs.description}
                required
              />
            </BaseFormField>

            <BaseFormField label="Student Email">
              <BaseTextInput
                name="studentEmail"
                placeholder="Jane.Doe@gmail.com"
                onChange={handleChanges}
                value={credsInputs.studentEmail}
                required
              />
            </BaseFormField>
            <BaseFormField label="School Seal Image URL">
              <BaseTextInput
                name="imageUrl"
                placeholder="Image"
                onChange={handleChanges}
                value={credsInputs.imageUrl}
                required
              />
            </BaseFormField>
            <BaseFormField label="Criteria">
              <BaseTextInput
                name="criteria"
                placeholder="Enter the criteria for the credentials"
                onChange={handleChanges}
                value={credsInputs.criteria}
                required
              />
            </BaseFormField>
            <BaseFormField label="Issued Date">
              <BaseTextInput
                name="issuedOn"
                placeholder="Enter the issue date for the credentials"
                onChange={handleChanges}
                value={credsInputs.issuedOn}
                required
              />
            </BaseFormField>
            <BaseFormField label="Expiration Date">
              <BaseTextInput
                name="expirationDate"
                placeholder="Enter the expiration date for the credentials"
                onChange={handleChanges}
                value={credsInputs.expirationDate}
              />
            </BaseFormField>
            <BaseButton
              margin="medium"
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
  height: calc(100vh - 70px);
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
