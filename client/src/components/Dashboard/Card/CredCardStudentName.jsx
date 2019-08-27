import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CredCardStudentName = ({ ownerName }) => {
  return (
    <StudentNameContainer>
      <h3>{ownerName}</h3>
    </StudentNameContainer>
  );
};

CredCardStudentName.propTypes = {
  ownerName: PropTypes.string.isRequired
};

const StudentNameContainer = styled.div`
  display: flex;
  align-items: center;
  width: 20%;

  @media (max-width: 800px) {
    width: 100%;

    h3 {
      font-size: 1.6rem;
      font-weight: 500;
      margin-bottom: 15px;
      width: 100%;
      text-align: center;
    }
  }

  @media (max-width: 500px) {
    width: 100%;

    h3 {
      font-size: 1.6rem;
      font-weight: 500;
      margin-bottom: 15px;
      width: 100%;
      text-align: center;
    }
  }
`;

export default CredCardStudentName;
