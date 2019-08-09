import React from 'react';
import PropTypes from 'prop-types';
import { Box, TextArea } from 'grommet';
import styled from 'styled-components';
import { useStateValue } from 'react-conflux';
import {
  globalContext,
  HANDLE_CRED_CHANGES
} from '../../../store/reducers/globalReducer';
import emblem from '../../../images/certEmblem.png';

import {
  BaseForm,
  BaseTextInput,
  BaseFormField,
  BaseButton
} from '../../../styles/themes';

import queries from './queries';

const CredentialsForm = ({ history }) => {
  const [
    {
      ownerName,
      credName,
      description,
      studentEmail,
      imageUrl,
      criteria,
      issuedOn,
      expirationDate,
      type,
      schoolId
    },
    dispatchGlobal
  ] = useStateValue(globalContext);

  const handleChanges = e => {
    dispatchGlobal({
      type: HANDLE_CRED_CHANGES,
      payload: e.target
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      history.push('/dashboard');
      await queries.addNewCredentials({
        ownerName,
        credName,
        description,
        studentEmail,
        imageUrl,
        criteria,
        issuedOn,
        expirationDate,
        type,
        schoolId
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <CertificateArea>
        <section>
          <div>
            <img src={imageUrl || emblem} alt="school seal" />
          </div>
          <h1>{credName || '[Credential Name]'}</h1>
          <h3>{description || '[Description]'}</h3>
          <h3>Issued on: {issuedOn || '[August 10, 2019]'}</h3>
          <h3>Issued by: [School of the Sequoias]</h3>
          <h2>{ownerName || 'John Doe'}</h2>
        </section>
        {/* DO NOT DELETE - ghost div for alignment */}
        <div />
      </CertificateArea>
      <CredentialSideForm>
        <h2>Issue Credential</h2>
        <BaseForm onSubmit={handleSubmit}>
          <Box>
            <CredField label="Name of Student">
              <BaseTextInput
                name="ownerName"
                placeholder="Jane Doe"
                onChange={handleChanges}
                value={ownerName}
                required
              />
            </CredField>
            <CredField label="Credential Name">
              <BaseTextInput
                name="credName"
                placeholder="Masters in Philosophy"
                onChange={handleChanges}
                value={credName}
                required
              />
            </CredField>
            <CredField label="Type">
              <BaseTextInput
                name="type"
                placeholder="Masters, PhD, Cert, etc."
                onChange={handleChanges}
                value={type}
                required
              />
            </CredField>
            <CredField label="Description">
              <TextArea
                name="description"
                placeholder="Student demostrated ability..."
                onChange={handleChanges}
                value={description}
                required
              />
            </CredField>

            <CredField label="Student Email">
              <BaseTextInput
                name="studentEmail"
                placeholder="Jane.Doe@gmail.com"
                onChange={handleChanges}
                value={studentEmail}
                required
              />
            </CredField>
            <CredField label="School Seal Image URL">
              <BaseTextInput
                name="imageUrl"
                placeholder="www.image.com/schoolSeal"
                onChange={handleChanges}
                value={imageUrl}
                required
              />
            </CredField>
            <CredField label="Criteria">
              <BaseTextInput
                name="criteria"
                placeholder="Completed studies in..."
                onChange={handleChanges}
                value={criteria}
                required
              />
            </CredField>
            <CredField label="Issued Date">
              <BaseTextInput
                name="issuedOn"
                placeholder="August 10, 2019"
                onChange={handleChanges}
                value={issuedOn}
                required
              />
            </CredField>
            <CredField label="Expiration Date">
              <BaseTextInput
                name="expirationDate"
                placeholder="September 7, 2023"
                onChange={handleChanges}
                value={expirationDate}
              />
            </CredField>
            <BaseButton
              margin="medium"
              type="submit"
              primary
              label="Submit"
              alignSelf="center"
            />
          </Box>
        </BaseForm>
      </CredentialSideForm>
    </Container>
  );
};

CredentialsForm.propTypes = {
  history: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

const CredField = styled(BaseFormField)`
  textarea {
    margin-left: 0;
    padding-left: 0;
  }
  label {
    margin-left: 0;
  }
  input {
    padding-left: 0;
    width: 350px;
  }
`;

const Container = styled.main`
  width: 100%;
  height: calc(100vh - 70px);
  padding-top: 120px;
  position: relative;
`
const CredentialSideForm = styled.section`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 375px;
  height: 100vh;
  background: ${props => props.theme.global.colors.dashBoardBg};
  padding: 120px 20px 0;
  border-left: 1px solid ${props => props.theme.global.colors.dashBoardBorder};
  overflow-x: hidden;
  overflow-y: auto;

<<<<<<< HEAD
  section {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 375px;
    height: 100vh;
    background: ${props => props.theme.global.colors.dashBoardBg};
    padding: 120px 20px 0;
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
=======
  h2 {
    width: 100%;
    text-align: center;
    margin-bottom: 37px;
  }
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
>>>>>>> 6e9100798dfb0472542c552933f2b95f46ea4339
  }
`;

const CertificateArea = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  section {
    width: calc(100% - 500px);
    max-width: 840px;
    background: ${props => props.theme.global.colors.dashBoardBg};
    border: 1px solid ${props => props.theme.global.colors.dashBoardBorder};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 37.5px 50px 32.5px;
    margin: 0 auto;

    & > * {
      text-align: center;
      margin-bottom: 15px;
    }

    & > *:first-child {
      max-width: 125px;
      margin-bottom: 50px;
    }

    & > *:last-child {
      margin-top: 25px;
    }
  }

  div {
    width: 375px;
  }
`;

export default CredentialsForm;
