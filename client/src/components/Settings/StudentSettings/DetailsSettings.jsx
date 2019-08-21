import React, { useState } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { useStateValue } from 'react-conflux';
import { MaskedInput, Select, Box } from 'grommet';

import queries from '../queries';
import {
  BaseForm,
  BaseTextInput,
  BaseFormField,
  BaseButton
} from '../../../styles/themes';
import { globalContext } from '../../../store/reducers/globalReducer';
import c from '../../../store/constants';
import { studentContext } from '../../../store/reducers/studentReducer';

const DetailSettings = () => {
  const [{ user }] = useStateValue(globalContext);
  const [studentState] = useStateValue(studentContext);
  const [input, setInput] = useState({
    ...studentState.studentData.studentDetails,
    userId: user.id
  });

  const handleChanges = e => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
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

  return (
    <>
      <StudentForm onSubmit={handleSubmit}>
        <Box direction="row">
          <Box direction="column" width="50%">
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
          </Box>
          <Box direction="column" width="50%">
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
          </Box>
        </Box>
        <Box width="100%">
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

const StudentForm = styled(BaseForm)`
  margin: 50px auto 10px;
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

export default DetailSettings;
