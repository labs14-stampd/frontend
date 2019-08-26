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

  @media (max-width: 500px) {
    width: 88%;

    p {
      font-size: 1.6rem;
      margin-bottom: 15px;
    }
  }
`;

export default CredCardDateIssued;
