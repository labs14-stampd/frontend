import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { useStateValue } from 'react-conflux';
import { MaskedInput, Select, Box, Heading } from 'grommet';

import {
  BaseForm,
  BaseTextInput,
  BaseFormField,
  BaseButton
} from '../../styles/themes';
import { globalContext } from '../../store/reducers/globalReducer';
import c from '../../store/constants';
import { studentContext } from '../../store/reducers/studentReducer';

const StudentSettings = ({ history }) => {
  const [{ user }] = useStateValue(globalContext);
  const [studentState, studentDispatch] = useStateValue(studentContext);
  const [input, setInput] = useState({
    firstName: '',
    lastName: '',
    middleName: '',
    street1: '',
    street2: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    userId: user.id
  });
  const [email, setEmail] = useState('');

  const handleChanges = e => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    // try {
    //   await queries.addStudentDetail({
    //     fullName: `${input.firstName} ${input.lastName}`,
    //     ...input
    //   });
    //   await queries.addRole({
    //     id: user.id,
    //     roleId: 3 // Role of a student is set to always be 3
    //   });
    //   toast.success(`Student Details added succesfully`, {
    //     className: 'status-ok',
    //     position: toast.POSITION.BOTTOM_CENTER,
    //     hideProgressBar: true,
    //     autoClose: true
    //   });
    //   history.push('/dashboard');
    // } catch (err) {
    //   console.error(err);
    // }
  };

  return (
    <>
      <StudentForm>
        <Box direction="column">
          <Heading margin="20px 0 0 0" alignSelf="center">
            Add an Email
          </Heading>
          <StudentFormField label="First Name">
            <StudentBaseTextInput
              name="email"
              placeholder="fakeemail@email.com"
              onChange={e => setEmail(e.target.value)}
              value={email}
              plain={false}
            />
          </StudentFormField>
        </Box>
      </StudentForm>
      <StudentForm onSubmit={handleSubmit}>
        <Box direction="column">
          <Heading margin="20px 0 0 0" alignSelf="center">
            Student Register
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

export default StudentSettings;
