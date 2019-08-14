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
`;

export default CredCardDateIssued;
