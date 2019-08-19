import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { useStateValue } from 'react-conflux';
import { MaskedInput, Select, Box, Heading } from 'grommet';
import { Trash } from 'grommet-icons';

import queries from './queries';
import {
  BaseForm,
  BaseTextInput,
  BaseFormField,
  BaseButton
} from '../../styles/themes';
import { globalContext } from '../../store/reducers/globalReducer';
import c from '../../store/constants';
import {
  studentContext,
  STUDENT_EMAIL_UPDATE,
  REMOVE_STUDENT_EMAIL
} from '../../store/reducers/studentReducer';
import ConfirmationLayer from '../../components/ConfirmationLayer';

const StudentSettings = ({ history }) => {
  const [{ user }] = useStateValue(globalContext);
  const [studentState, studentDispatch] = useStateValue(studentContext);
  const [input, setInput] = useState({
    firstName: studentState.studentData.studentDetails.firstName,
    lastName: studentState.studentData.studentDetails.lastName,
    middleName: studentState.studentData.studentDetails.middleName,
    street1: studentState.studentData.studentDetails.street1,
    street2: studentState.studentData.studentDetails.street2,
    city: studentState.studentData.studentDetails.city,
    state: studentState.studentData.studentDetails.state,
    zip: studentState.studentData.studentDetails.zip,
    phone: studentState.studentData.studentDetails.phone,
    userId: user.id
  });
  const [email, setEmail] = useState('');

  const [
    hasActiveConfirmationDialog,
    setHasActiveConfirmationDialog
  ] = useState(false);

  const handleChanges = e => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };

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

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await queries.updateStudentDetail({
        fullName: `${input.firstName} ${input.lastName}`,
        ...input,
        id: studentState.studentData.studentDetails.id
      });
      toast.success(`Student Details updated succesfully`, {
        className: 'status-ok',
        position: toast.POSITION.BOTTOM_CENTER,
        hideProgressBar: true,
        autoClose: true
      });
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
          <Heading margin="20px 0 0 0" alignSelf="center">
            Add an Email
          </Heading>
          <StudentFormField label="Email">
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
        <h2>Email List</h2>
        {studentState.studentData.studentDetails.emailList.map(emailObj => (
          <EmailContainer>
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
      <StudentForm onSubmit={handleSubmit}>
        <Box direction="column">
          <Heading margin="20px 0 0 0" alignSelf="center">
            Update Student Details
          </Heading>
          <StudentFormField label="First Name">
            <StudentBaseTextInput
              name="firstName"
              placeholder="Jane"
              onChange={handleChanges}
              value={input.firstName}
              plain={false}
            />
          </StudentFormField>
          <StudentFormField label="Middle Name">
            <StudentBaseTextInput
              name="middleName"
              placeholder="Emily"
              onChange={handleChanges}
              value={input.middleName}
              plain={false}
            />
          </StudentFormField>
          <StudentFormField label="Last Name">
            <StudentBaseTextInput
              name="lastName"
              placeholder="Doe"
              onChange={handleChanges}
              value={input.lastName}
              plain={false}
            />
          </StudentFormField>
          <StudentFormField label="Address 1">
            <StudentBaseTextInput
              name="street1"
              placeholder="123 Fake street"
              onChange={handleChanges}
              value={input.street1}
            />
          </StudentFormField>
          <StudentFormField label="Address 2">
            <StudentBaseTextInput
              name="street2"
              placeholder="Apt B"
              onChange={handleChanges}
              value={input.street2}
            />
          </StudentFormField>
          <StudentFormField label="City">
            <StudentBaseTextInput
              name="city"
              placeholder="San Francisco"
              onChange={handleChanges}
              value={input.city}
            />
          </StudentFormField>
          <StudentFormField
            label="State"
            name="state"
            component={Select}
            options={c.states}
            onChange={({ option }) => setInput({ ...input, state: option })}
            value={input.state}
            placeholder="State"
          />
          <StudentFormField label="Zip Code">
            <StudentBaseTextInput
              name="zip"
              placeholder="90210"
              onChange={handleChanges}
              value={input.zip}
            />
          </StudentFormField>
          <StudentFormField label="Phone Number">
            <StudentMaskedInput
              mask={[
                { fixed: '(' },
                {
                  length: 3,
                  regexp: /^[0-9]{1,3}$/,
                  placeholder: 'xxx'
                },
                { fixed: ')' },
                { fixed: ' ' },
                {
                  length: 3,
                  regexp: /^[0-9]{1,3}$/,
                  placeholder: 'xxx'
                },
                { fixed: '-' },
                {
                  length: 4,
                  regexp: /^[0-9]{1,4}$/,
                  placeholder: 'xxxx'
                }
              ]}
              value={input.phone}
              name="phone"
              onChange={handleChanges}
            />
          </StudentFormField>
          <StudentButton
            type="submit"
            primary
            label="Submit"
            alignSelf="center"
          />
        </Box>
      </StudentForm>
    </>
  );
};

StudentSettings.propTypes = {
  history: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

const StudentForm = styled(BaseForm)`
  margin: 120px auto 100px;
  background-color: white;
  border: 1px solid #d8d8d8;
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
`;

const StudentFormField = styled(BaseFormField)`
  margin: 20px;
  border-bottom: none;
  input {
    /* margin-bottom: 10px; */
  }
`;

const StudentMaskedInput = styled(MaskedInput)`
  /* border: ${({ theme }) => theme.global.border}; */
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

export default StudentSettings;
