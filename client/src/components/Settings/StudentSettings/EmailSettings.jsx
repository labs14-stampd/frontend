import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { useStateValue } from 'react-conflux';
import { InfiniteScroll, Box } from 'grommet';
import { Trash } from 'grommet-icons';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

import queries from '../queries';
import { BaseButton } from '../../../styles/themes';
import { globalContext } from '../../../store/reducers/globalReducer';
import {
  studentContext,
  STUDENT_EMAIL_UPDATE,
  REMOVE_STUDENT_EMAIL
} from '../../../store/reducers/studentReducer';
import ConfirmationLayer from '../../ConfirmationLayer';
import EmailContainer from './EmailContainer';

const EmailSettings = ({ errors, touched, status }) => {
  const [{ user }] = useStateValue(globalContext);
  const [studentState, studentDispatch] = useStateValue(studentContext);
  const emailList = studentState.studentData.studentDetails.emailList.sort(
    (a, b) => {
      return a.email > b.email ? 1 : -1;
    }
  );
  const [email, setEmail] = useState('');

  const [
    hasActiveConfirmationDialog,
    setHasActiveConfirmationDialog
  ] = useState(false);
  const [userEmailIdToDelete, setUserEmailIdToDelete] = useState(null);

  useEffect(() => {
    // status will only be true when handleSubmit from formik is activated
    if (status) {
      const submitEmail = async () => {
        try {
          const { data } = await queries.addUserEmail({
            userId: user.id,
            email: status.email
          });
          studentDispatch({
            type: STUDENT_EMAIL_UPDATE,
            payload: data.addUserEmail
          });
          toast.success(`Email added succesfully`, {
            className: 'status-ok',
            position: toast.POSITION.BOTTOM_CENTER,
            hideProgressBar: true,
            autoClose: true
          });
          setEmail('');
        } catch (err) {
          console.error(err);
        }
      };

      submitEmail();
    }
  }, [status]);

  const confirmRemoveEmail = async ({ id, email: removedEmail }) => {
    try {
      await queries.deleteUserEmail({ id });
      toast.success(`Email is deleted`, {
        className: 'status-ok',
        position: toast.POSITION.BOTTOM_CENTER,
        hideProgressBar: true,
        autoClose: true
      });
      const updateEmailList = studentState.studentData.studentDetails.emailList.filter(
        emailItem => {
          return emailItem.id !== id;
        }
      );
      const updatedCredentialList = studentState.studentData.studentDetails.credentials.filter(
        cred => {
          return cred.studentEmail !== removedEmail;
        }
      );
      studentDispatch({
        type: REMOVE_STUDENT_EMAIL,
        payload: { emailList: updateEmailList, credList: updatedCredentialList }
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <StudentForm>
        <EmailSection direction="column">
          <Box direction="column">
            <h2>Add an Email</h2>
            <StudentField
              component="input"
              type="text"
              name="email"
              placeholder="fakeemail@email.com"
            />
            {touched.email && errors.email && (
              <p className="error">{errors.email}</p>
            )}
          </Box>
          <StudentButton
            type="submit"
            primary
            label="Add Email"
            alignSelf="center"
          />
        </EmailSection>
      </StudentForm>
      <EmailBox direction="column">
        <h2>Emails</h2>
        <EmailSectionContainer>
          <p>{user.email}</p>
          <p>Primary email</p>
          <TrashButton disabled color="searchBarBorder" />
        </EmailSectionContainer>
        {hasActiveConfirmationDialog && (
          // yesFunc for when the "Yes" button is clicked; noFunc for when the "No" button is clicked (both are optional)
          <ConfirmationLayer
            onClose={() => setHasActiveConfirmationDialog(false)} // Needed to make the layer disappear
            yesFunc={() => {
              return confirmRemoveEmail(userEmailIdToDelete);
            }}
          />
        )}
        <Box height="55vh" overflow="auto">
          <InfiniteScroll items={emailList} step={10}>
            {item => {
              return (
                <EmailContainer
                  key={item.id}
                  id={item.id}
                  email={item.email}
                  setUserEmailIdToDelete={setUserEmailIdToDelete}
                  setHasActiveConfirmationDialog={
                    setHasActiveConfirmationDialog
                  }
                />
              );
            }}
          </InfiniteScroll>
        </Box>
      </EmailBox>
    </>
  );
};

const EmailSettingsWithFormik = withFormik({
  mapPropsToValues({ email }) {
    return {
      email: email || ''
    };
  },

  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email()
      .required()
  }),

  async handleSubmit(values, { setStatus, resetForm }) {
    // pass values from input to props.status
    setStatus(values);
    resetForm();
  }
})(EmailSettings);

const EmailSection = styled(Box)`
  justify-content: space-between;
`;

const StudentForm = styled(Form)`
  margin: 50px auto 10px;
  border-radius: 2px;
  max-width: 800px;
  width: 100%;
`;

const StudentButton = styled(BaseButton)`
  text-align: center;
  margin: 10px 20px 15px;
`;

const StudentField = styled(Field)`
  border: none;
  background: transparent;
  border-bottom: 1px solid black;
  width: 100%;
  max-width: 800px;
  padding: 10px 0;
  font-size: 1.8rem;
  font-weight: 700;
  ::placeholder {
    font-size: 1.6rem;
  }
`;

const TrashButton = styled(Trash)`
  cursor: pointer;
`;

const EmailBox = styled(Box)`
  margin: 5px auto 0px;
  max-width: 800px;
`;

const EmailSectionContainer = styled.section`
  margin: 10px auto 0;
  max-width: 800px;
  width: 100%;
  background: white;
  /* min-height: calc(100vh - 170px); */
  -webkit-box-shadow: -2px 5px 25px -17px rgba(0, 0, 0, 0.61);
  -moz-box-shadow: -2px 5px 25px -17px rgba(0, 0, 0, 0.61);
  box-shadow: -2px 5px 25px -17px rgba(0, 0, 0, 0.61);
  border-radius: 2px;
  display: flex;
  justify-content: space-between;
  padding: 20px 3%;
  transition: box-shadow 0.5s;

  :hover {
    -webkit-box-shadow: 0px 0px 15px -2px rgba(125, 76, 219, 1);
    -moz-box-shadow: 0px 0px 15px -2px rgba(125, 76, 219, 1);
    box-shadow: 0px 0px 15px -2px rgba(125, 76, 219, 1);
  }
`;

export default EmailSettingsWithFormik;
