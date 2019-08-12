import React from 'react';
import styled from 'styled-components';

const CredCardSchoolName = ({ credName, criteria }) => {
  return (
    <SchoolNameContainer>
      <h2>{credName}</h2>
      <p>{criteria}</p>
    </SchoolNameContainer>
  );
};

const SchoolNameContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export default CredCardSchoolName;
