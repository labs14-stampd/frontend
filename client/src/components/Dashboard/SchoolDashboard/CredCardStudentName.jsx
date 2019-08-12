import React from 'react';
import styled from 'styled-components';

const CredCardStudentName = () => {
  return (
    <StudentNameContainer>
      <h3>Cecil John Tantay</h3>
    </StudentNameContainer>
  );
};

const StudentNameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default CredCardStudentName;
