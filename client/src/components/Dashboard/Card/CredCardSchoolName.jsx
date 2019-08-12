import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CredCardSchoolName = ({ credName, criteria }) => {
  return (
    <SchoolNameContainer>
      <h2>{credName}</h2>
      <p>{criteria}</p>
    </SchoolNameContainer>
  );
};

CredCardSchoolName.propTypes = {
  credName: PropTypes.string.isRequired,
  criteria: PropTypes.string.isRequired
};

const SchoolNameContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 45%;
`;

export default CredCardSchoolName;
