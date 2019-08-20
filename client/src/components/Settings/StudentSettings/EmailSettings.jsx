import React, { useState } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { useStateValue } from 'react-conflux';
import { Box, Heading } from 'grommet';
import { Trash } from 'grommet-icons';

import queries from '../queries';
import {
  BaseForm,
  BaseTextInput,
  BaseFormField,
  BaseButton
} from '../../../styles/themes';
import { globalContext } from '../../../store/reducers/globalReducer';
import {
  studentContext,
  STUDENT_EMAIL_UPDATE,
  REMOVE_STUDENT_EMAIL
} from '../../../store/reducers/studentReducer';
import ConfirmationLayer from '../../ConfirmationLayer';

const EmailSettings = () => {
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

  const submitEmail = async e => {
    e.preventDefault();
    try {
      const { data } = await queries.addUserEmail({
        userId: user.id,
        email
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

  const confirmRemoveEmail = async id => {
    try {
      await queries.deleteUserEmail({ id });
      toast.success(`Email is deleted`, {
        className: 'status-ok',
        position: toast.POSITION.BOTTOM_CENTER,
        hideProgressBar: true,
        autoClose: true
      });
      const updateEmailList = studentState.studentData.studentDetails.emailList.filter(
        email => {
          return email.id !== id;
        }
      );
      studentDispatch({ type: REMOVE_STUDENT_EMAIL, payload: updateEmailList });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <StudentForm onSubmit={submitEmail}>
        <Box direction="column">
          <h2>Add an Email</h2>
          <StudentFormField>
            <StudentBaseTextInput
              name="email"
              placeholder="fakeemail@email.com"
              onChange={e => setEmail(e.target.value)}
              value={email}
              plain={false}
            />
          </StudentFormField>
          <StudentButton
            type="submit"
            primary
            label="Add Email"
            alignSelf="center"
          />
        </Box>
      </StudentForm>
      <EmailBox direction="column">
        <h2>Emails</h2>
        <EmailContainer>
          <p>{user.email}</p>
          <TrashButton disabled={true} color="searchBarBorder" />{' '}
        </EmailContainer>
        {emailList.map(emailObj => (
          <EmailContainer key={emailObj.id}>
            <p>{emailObj.email}</p>
            {hasActiveConfirmationDialog && (
              // yesFunc for when the "Yes" button is clicked; noFunc for when the "No" button is clicked (both are optional)
              <ConfirmationLayer
                onClose={() => setHasActiveConfirmationDialog(false)} // Needed to make the layer disappear
                yesFunc={() => confirmRemoveEmail(emailObj.id)}
              />
            )}
            <TrashButton onClick={() => setHasActiveConfirmationDialog(true)} />{' '}
          </EmailContainer>
        ))}
      </EmailBox>
    </>
  );
};

const StudentForm = styled(BaseForm)`
  margin: 120px auto 100px;
  border-radius: 2px;
  max-width: 800px;
  width: 100%;
`;

const StudentButton = styled(BaseButton)`
  text-align: center;
  margin: 15px 20px 50px;
`;

const StudentBaseTextInput = styled(BaseTextInput)`
  border: none;
  width: 100%;
  max-width: 800px;
`;

const StudentFormField = styled(BaseFormField)`
  border-bottom: none;
`;

const TrashButton = styled(Trash)`
  cursor: pointer;
`;

const EmailBox = styled(Box)`
  margin: 12px auto 0px;
  max-width: 800px;
`;

const EmailContainer = styled.section`
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

export default EmailSettings;
