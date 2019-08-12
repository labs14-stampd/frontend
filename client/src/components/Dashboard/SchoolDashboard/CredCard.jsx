import React from 'react';
import styled from 'styled-components';
import CredCardViewBtn from './CredCardViewBtn';
import CredCardSchoolName from './CredCardSchoolName';
import CredCardDateIssued from './CredCardDateIssued';
import CredCardStudentName from './CredCardStudentName';
import CredCardDeleteBtn from './CredCardDeleteBtn';

const CredCard = ({ credName }) => {
  return (
    <CredContainer>
      <CredCardViewBtn />
      <CredCardSchoolName credName={credName} />
      <CredCardDateIssued />
      <CredCardStudentName />
      <CredCardDeleteBtn />
    </CredContainer>
  );
};

const CredContainer = styled.section`
  margin: 50px auto 0;
  max-width: 1600px;
  width: 100%;
  background: white;
  /* min-height: calc(100vh - 170px); */
  border: 1px solid #d8d8d8;
  border-radius: 2px;
  display: flex;
`;

export default CredCard;
