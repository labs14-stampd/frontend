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

  h2 {
    font-family: 'Roboto', sans-serif;
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 10px;
  }
  p {
    font-family: 'Roboto', sans-serif;
    font-size: 1.8rem;
  }

  @media (max-width: 800px) {
    width: 100%;

    h2 {
      width: 100%;
      text-align: center;
      font-size: 2.1rem;
      margin-bottom: 15px;
    }

    p {
      width: 100%;
      text-align: center;
      font-size: 1.6rem;
      margin-bottom: 5px;
    }
  }

  @media (max-width: 500px) {
    width: 100%;

    h2 {
      width: 100%;
      text-align: center;
      font-size: 2.1rem;
      margin-bottom: 15px;
    }

    p {
      width: 100%;
      text-align: center;
      font-size: 1.6rem;
      margin-bottom: 5px;
    }
  }
`;

export default CredCardSchoolName;
