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
  ownerName: PropTypes.string
};

CredCardStudentName.defaultProps = {
  ownerName: ''
};

const StudentNameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default CredCardStudentName;
