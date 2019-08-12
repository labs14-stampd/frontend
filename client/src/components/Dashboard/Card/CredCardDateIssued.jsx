import React from 'react';
import styled from 'styled-components';

const CredCardDateIssued = () => {
  return (
    <DateIssuedContainer>
      <p>2/2/2018</p>
    </DateIssuedContainer>
  );
};

const DateIssuedContainer = styled.div`
  display: flex;
  align-items: center;
  width: 12%;
`;

export default CredCardDateIssued;