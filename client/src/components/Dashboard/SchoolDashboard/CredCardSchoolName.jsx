import React from 'react';
import styled from 'styled-components';

const CredCardSchoolName = ({ credName }) => {
  return (
    <SchoolNameContainer>
      <h2>{credName}</h2>
      <p>Credential description here. Lorem Ipsomething something idk</p>
    </SchoolNameContainer>
  );
};

const SchoolNameContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export default CredCardSchoolName;
