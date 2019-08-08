import React from 'react';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

const Loading = () => {
  return (
    <LoadingContainer>
      <Loader type="RevolvingDot" color="#7D4CDB" height={100} width={100} />
    </LoadingContainer>
  );
};

const LoadingContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background: #f8f8f8;
  align-items: center;
  justify-content: center;
`;

export default Loading;
