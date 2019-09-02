import CONSTANTS from '../../../store/constants';

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { useStateValue } from 'react-conflux';
import {
  globalContext,
  HANDLE_CRED_CHANGES,
  RESET_CREDENTIAL_FORM
} from '../../../store/reducers/globalReducer';
import {
  schoolContext,
  UPDATE_CRED_DATA
} from '../../../store/reducers/schoolReducer';

import queries from './queries';

import { Box, MaskedInput } from 'grommet';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';
import { BaseFormField, BaseButton } from '../../../styles/themes';

import { Form as FormikForm, Field as FormikField, withFormik } from 'formik';
import * as Yup from 'yup';

import emblem from '../../../images/certEmblem.png';

const daysInMonth = month => new Date(2019, month, 0).getDate();

const CredentialsForm = ({ history, errors, touched, status, values }) => {
  const [stateSchool, dispatchSchool] = useStateValue(schoolContext);
  const [isSubmitting, setIsSubmitting] = useState(false);
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
      user
    },
    dispatchGlobal
  ] = useStateValue(globalContext);

  // Takes over the handling of form submission since Formik has its own method that should NOT be overriden
  useEffect(() => {
    if (status) {
      (async () => {
        setIsSubmitting(true);
        try {
          toast.info(`Submitting for ${ownerName}`, {
            className: 'brand-background',
            position: toast.POSITION.BOTTOM_CENTER,
            containerId: 1,
            hideProgressBar: true,
            autoClose: false,
            toastId: 5
          });

          const credData = await queries.addNewCredentials({
            ownerName,
            credName,
            description,
            studentEmail,
            imageUrl,
            criteria,
            issuedOn,
            expirationDate,
            type,
            schoolId: user.id
          });
          dispatchSchool({
            type: UPDATE_CRED_DATA,
            payload: credData.data.addNewCredential.schoolsUserInfo.schoolDetails.credentials.sort(
              (a, b) => {
                return a.id - b.id;
              }
            )
          });
          toast.dismiss(5);

          toast.success(
            `Success!! Blockchain verification available in 5 minutes!`,
            {
              className: 'status-ok',
              position: toast.POSITION.BOTTOM_CENTER,
              hideProgressBar: true,
              autoClose: 5000
            }
          );
          dispatchGlobal({
            type: RESET_CREDENTIAL_FORM
          });
          Object.keys(values).forEach(field => (values[field] = '')); // Reset form

          setIsSubmitting(false);
        } catch (error) {
          toast.error('Error submitting credential', {
            hideProgressBar: true,
            position: toast.POSITION.BOTTOM_CENTER,
            autoClose: 5000
          });
          setIsSubmitting(false);
        }
      })();
    }
  }, [status]);

  // Takes over the handling of form changes since Formik has its own method that should NOT be overriden
  useEffect(() => {
    dispatchGlobal({
      type: HANDLE_CRED_CHANGES,
      payload: values
    });
  }, [values]);

  const { name } = stateSchool.schoolData.schoolDetails;

  const handleDateChange = e => {
    values[e.target.name] = e.target.value;
    dispatchGlobal({
      type: HANDLE_CRED_CHANGES,
      payload: values
    });
  };

  return (
    <Container>
      <CertificateArea>
        <section>
          <div>
            <img src={imageUrl || emblem} draggable={false} alt="school seal" />
          </div>
          <h1>{credName || '[Credential Name]'}</h1>
          <h3>{description || '[Description]'}</h3>
          <h3>Issued on {issuedOn || ' [August 10, 2019]'}</h3>
          <h3>Issued by {stateSchool.schoolDataSuccess && name}</h3>
          <h2>{ownerName || 'John Doe'}</h2>
        </section>
        {/* DO NOT DELETE - ghost div for alignment */}
        <div />
      </CertificateArea>
      <CredentialSideFormArea>
        <h2>Issue Credential</h2>
        <CredForm>
          <Box>
            <CredField label="Name of Student">
              <CredInput
                component="input"
                type="text"
                name="ownerName"
                placeholder="Jane Doe"
              />
            </CredField>
            {touched.ownerName && errors.ownerName && (
              <ErrorMessage>{errors.ownerName}</ErrorMessage>
            )}
            <CredField label="Credential Name">
              <CredInput
                component="input"
                type="text"
                name="credName"
                placeholder="Title of Credential, e.g., 'M.A., Philosophy'"
              />
            </CredField>
            {touched.credName && errors.credName && (
              <ErrorMessage>{errors.credName}</ErrorMessage>
            )}
            <CredField label="Type">
              <CredInput
                component="input"
                type="text"
                name="type"
                placeholder="Type of Credential, e.g. 'Graduate Degree'"
              />
            </CredField>
            {touched.type && errors.type && (
              <ErrorMessage>{errors.type}</ErrorMessage>
            )}
            <CredField label="Description">
              <CredInput
                component="textarea"
                name="description"
                placeholder="Student demostrated ability..."
              />
            </CredField>
            {touched.description && errors.description && (
              <ErrorMessage>{errors.description}</ErrorMessage>
            )}
            <CredField label="Student Email">
              <CredInput
                component="input"
                type="text"
                name="studentEmail"
                placeholder="Jane.Doe@gmail.com"
              />
            </CredField>
            {touched.studentEmail && errors.studentEmail && (
              <ErrorMessage>{errors.studentEmail}</ErrorMessage>
            )}
            <CredField label="School Seal Image URL">
              <CredInput
                component="input"
                type="text"
                name="imageUrl"
                placeholder="www.image.com/schoolSeal"
              />
            </CredField>
            {touched.imageUrl && errors.imageUrl && (
              <ErrorMessage>{errors.imageUrl}</ErrorMessage>
            )}
            <CredField label="Criteria">
              <CredInput
                component="input"
                type="text"
                name="criteria"
                placeholder="Completed studies in..."
              />
            </CredField>
            {touched.criteria && errors.criteria && (
              <ErrorMessage>{errors.criteria}</ErrorMessage>
            )}
            <CredField label="Issued Date">
              <DateMaskedInput
                mask={[
                  {
                    length: 2,
                    options: [...Array(12).keys()].map(val =>
                      `${val + 1}`.padStart(2, '0')
                    ),
                    regexp: /^1[0,1-2]$|^0[1-9]$/,
                    placeholder: 'mm'
                  },
                  { fixed: '/' },
                  {
                    length: 2,
                    options: [
                      ...Array(
                        daysInMonth(+values.issuedOn.split('/')[0])
                      ).keys()
                    ].map(val => `${val + 1}`.padStart(2, '0')),
                    regexp: /^[1-2][0-9]$|^3[0-1]$|^0[1-9]$/,
                    placeholder: 'dd'
                  },
                  { fixed: '/' },
                  {
                    length: 4,
                    options: Array.from({ length: 100 }, (v, k) => 2019 - k),
                    regexp: /^19[0-9][0-9]$|^20[0-9][0-9]$/,
                    placeholder: 'yyyy'
                  }
                ]}
                name="issuedOn"
                placeholder="MM/DD/YYYY"
                onChange={handleDateChange}
                value={values.issuedOn}
              />
            </CredField>
            {touched.issuedOn && errors.issuedOn && (
              <ErrorMessage>{errors.issuedOn}</ErrorMessage>
            )}
            <CredField label="Expiration Date">
              <DateMaskedInput
                mask={[
                  {
                    length: 2,
                    options: [...Array(12).keys()].map(val =>
                      `${val + 1}`.padStart(2, '0')
                    ),
                    regexp: /^1[0,1-2]$|^0[1-9]$$/,
                    placeholder: 'mm'
                  },
                  { fixed: '/' },
                  {
                    length: 2,
                    options: [
                      ...Array(
                        daysInMonth(+values.issuedOn.split('/')[0])
                      ).keys()
                    ].map(val => `${val + 1}`.padStart(2, '0')),
                    regexp: /^[1-2][0-9]$|^3[0-1]$|^0[1-9]$/,
                    placeholder: 'dd'
                  },
                  { fixed: '/' },
                  {
                    length: 4,
                    options: Array.from({ length: 100 }, (v, k) => 2019 - k),
                    regexp: /^19[0-9][0-9]$|^20[0-9][0-9]$/,
                    placeholder: 'yyyy'
                  }
                ]}
                name="expirationDate"
                placeholder="MM/DD/YYYY"
                onChange={handleDateChange}
                value={values.expirationDate}
              />
            </CredField>
            {touched.expirationDate && errors.expirationDate && (
              <ErrorMessage>{errors.expirationDate}</ErrorMessage>
            )}
            <BaseButton
              margin="medium"
              type="submit"
              primary
              label="Submit"
              alignSelf="center"
              disabled={isSubmitting}
            />
          </Box>
        </CredForm>
      </CredentialSideFormArea>
    </Container>
  );
};

// For Formik HOC
const mapPropsToValues = ({
  ownerName,
  credName,
  type,
  description,
  studentEmail,
  imageUrl,
  criteria,
  issuedOn,
  expirationDate
}) => {
  return {
    ownerName: ownerName || '',
    credName: credName || '',
    type: type || '',
    description: description || '',
    studentEmail: studentEmail || '',
    imageUrl: imageUrl || '',
    criteria: criteria || '',
    issuedOn: issuedOn || '',
    expirationDate: expirationDate || ''
  };
};
const validationSchema = Yup.object().shape({
  ownerName: Yup.string().required(CONSTANTS.VALIDATION_MSG.REQUIRED),
  credName: Yup.string().required(CONSTANTS.VALIDATION_MSG.REQUIRED),
  type: Yup.string().required(CONSTANTS.VALIDATION_MSG.REQUIRED),
  description: Yup.string().required(CONSTANTS.VALIDATION_MSG.REQUIRED),
  studentEmail: Yup.string()
    .email(CONSTANTS.VALIDATION_MSG.EMAIL)
    .required(CONSTANTS.VALIDATION_MSG.REQUIRED),
  imageUrl: Yup.string(CONSTANTS.VALIDATION_MSG.REQUIRED),
  criteria: Yup.string().required(CONSTANTS.VALIDATION_MSG.REQUIRED),
  issuedOn: Yup.string()
    .matches(CONSTANTS.dateRegExp, CONSTANTS.VALIDATION_MSG.DATE)
    .required(CONSTANTS.VALIDATION_MSG.REQUIRED),
  expirationDate: Yup.string().matches(
    CONSTANTS.dateRegExp,
    CONSTANTS.VALIDATION_MSG.DATE
  )
});
const CredentialsFormWithFormik = withFormik({
  mapPropsToValues,
  validationSchema,
  handleSubmit: (values, { setStatus }) => {
    setStatus(values);
  }
})(CredentialsForm);

CredentialsForm.propTypes = {
  history: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

const ErrorMessage = styled.p`
  font-size: 1.4rem;
  color: red;
  margin-bottom: 20px;
`;

const CredForm = styled(FormikForm)``;

const CredInput = styled(FormikField)`
  max-width: 800px;
  background: transparent;
  font-size: 1.8rem;
  font-weight: 700;
  padding: 10px 2.5px;
  border: none;

  ::placeholder {
    font-size: 1.6rem;
    opacity: 0.25;
  }
`;

const CredField = styled(BaseFormField)`
  label {
    margin-left: 0;
  }
  input {
    width: 350px;
  }
  textarea {
    min-width: 350px;
    max-width: 800px;
  }
`;

const Container = styled.main`
  width: 100%;
  height: -webkit-calc(100vh - 70px);
  height: -moz-calc(100vh - 70px);
  height: calc(100vh - 70px);
  padding-top: 120px;
  position: relative;

  @media (max-width: 500px) {
    padding: 0 3% 0;
    margin-bottom: 50px;
    height: auto;
  }
`;

const CredentialSideFormArea = styled.section`
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

  @media (max-width: 800px) {
    position: relative;
    width: 98%;
    padding: 120px 3% 0;
    margin: 0 4% 0 1%;
    border: 1px solid ${props => props.theme.global.colors.dashBoardBorder};
    overflow-x: visible;
    overflow-y: visible;
    height: auto;
  }

  @media (max-width: 500px) {
    position: relative;
    width: 100%;
    padding: 120px 3% 0;
    border: 1px solid ${props => props.theme.global.colors.dashBoardBorder};
    overflow-x: visible;
    overflow-y: visible;
    height: auto;
  }

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
`;

const CertificateArea = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 80px 0;

  @media (max-width: 800px) {
    display: none;
  }

  @media (max-width: 500px) {
    display: none;
  }

  section {
    width: calc(100% - 500px);
    max-width: 1000px;
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

const DateMaskedInput = styled(MaskedInput)``;

export default CredentialsFormWithFormik;
