import React from 'react';
import styled from 'styled-components';

const CredCardDateIssued = ({ date }) => {
  return (
    <DateIssuedContainer>
      <p>{date}</p>
    </DateIssuedContainer>
  );
};

const DateIssuedContainer = styled.div`
  display: flex;
  align-items: center;
  width: 12%;

  @media (max-width: 800px) {
    width: 100%;

    p {
      width: 100%;
      text-align: center;
      font-size: 1.6rem;
      margin-bottom: 5px;
    }
  }

  @media (max-width: 500px) {
    width: 100%;

    p {
      width: 100%;
      text-align: center;
      font-size: 1.6rem;
      margin-bottom: 5px;
    }
  }
`;

export default CredCardDateIssued;
