import React from 'react';
import PropTypes from 'prop-types';
import { Box, TextArea } from 'grommet';
import styled from 'styled-components';
import { useStateValue } from 'react-conflux';
import { globalContext, HANDLE_CRED_CHANGES } from '../../../store/reducers/globalReducer';



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
  ] = useStateValue(globalContext)

  const handleChanges = e => {
    dispatchGlobal({
      type: HANDLE_CRED_CHANGES,
      payload: e.target
    })
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
        <div>
          <img src={imageUrl} alt="school seal"/>
        </div>
        <h1>{credName || "[Certifcate of Completion]"}</h1>
        <h3>{description || "[Applicant has demonstrated proficiency hooah]"}</h3>
        <h3>Issued on: {issuedOn || "[January 1, 0 BC]"}</h3>
        <h3>Issued by: ["School of Knowing Everything There Is"]</h3>
        <h2>{ownerName || "John Doe"}</h2>
      </CertificateArea>
      <section>
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
                placeholder="Masters in Philopsophy"
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
                placeholder="Summary of credential"
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
                placeholder="Image"
                onChange={handleChanges}
                value={imageUrl}
                required
              />
            </CredField>
            <CredField label="Criteria">
              <BaseTextInput
                name="criteria"
                placeholder="Enter the criteria for the credentials"
                onChange={handleChanges}
                value={criteria}
                required
              />
            </CredField>
            <CredField label="Issued Date">
              <BaseTextInput
                name="issuedOn"
                placeholder="Enter the issue date for the credentials"
                onChange={handleChanges}
                value={issuedOn}
                required
              />
            </CredField>
            <CredField label="Expiration Date">
              <BaseTextInput
                name="expirationDate"
                placeholder="Enter the expiration date for the credentials"
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
      </section>
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
  }
`;

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
    padding: 120px 1.5% 0 2%;
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

/*
    Centering:
    • width -> Subtract 375px from width to account for form at the right that has absolute positioning
    • margin-left -> for percentage-based width, half of 100% minus the percent value used in the width property setting
        example: 100% - 90% (width percent value) = 10% / 2 =  5% (final margin-left value)
          OR: calc((100% - 90%) / 2)
 */
const CertificateArea = styled.div`
  width: calc(90% - 375px);
  background: ${props => props.theme.global.colors.dashBoardBg};
  border: 1px solid ${props => props.theme.global.colors.dashBoardBorder};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  margin-left: 5%;

  & > * {
    text-align: center;
    margin-bottom: 15px;
  }

  & > *:first-child {
    margin-bottom: 50px;
  }

  & > *:last-child {
    margin-top: 20px;
  }
`;

export default CredentialsForm;
