import React, { useState } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { useStateValue } from 'react-conflux';
import { InfiniteScroll, Box } from 'grommet';
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
  REMOVE_STUDENT_EMAIL,
  STUDENT_DATA_SUCCESS
} from '../../../store/reducers/studentReducer';
import ConfirmationLayer from '../../ConfirmationLayer';
import EmailContainer from './EmailContainer';

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
  const [userEmailIdToDelete, setUserEmailIdToDelete] = useState(null);

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
      const userData = await queries.getUserById({
        id: user.id
      });
      studentDispatch({
        type: STUDENT_DATA_SUCCESS,
        payload: userData
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
        <EmailSection direction="column">
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
          <TrashButton disabled={true} color="searchBarBorder" />{' '}
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

        <InfiniteScroll items={emailList} step={10}>
          {item => {
            return (
              <EmailContainer
                key={item.id}
                id={item.id}
                email={item.email}
                setUserEmailIdToDelete={setUserEmailIdToDelete}
                setHasActiveConfirmationDialog={setHasActiveConfirmationDialog}
              />
            )
          }}
        </InfiniteScroll>
      </EmailBox>
    </>
  );
};

const EmailSection = styled(Box)`
  justify-content: space-between;
`;

const StudentForm = styled(BaseForm)`
  margin: 50px auto 10px;
  border-radius: 2px;
  max-width: 800px;
  width: 100%;
`;

const StudentButton = styled(BaseButton)`
  text-align: center;
  margin: 10px 20px 15px;
`;

const StudentBaseTextInput = styled(BaseTextInput)`
  border: none;
  width: 100%;
  max-width: 800px;
  padding-left: 0;
`;

const StudentFormField = styled(BaseFormField)`
  border-bottom: none;
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

export default EmailSettings;
