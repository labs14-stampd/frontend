import React from 'react';
import styled from 'styled-components';

const errorMsg = 'Oops, this is not the page you are looking for....';

// Subtract pixels to prevent unnecessary vertical scrollbar (accounts for fixed nav bar at the top and other elements)
const Container = styled.main`
  min-height: -webkit-calc(100vh - 200px);
  min-height: -moz-calc(100vh - 200px);
  min-height: calc(100vh - 200px);
  margin: 125px 7.5% 0;
`;

const ErrorCodeMsg = styled.h1`
  @keyframes errorPageHeadingExpand {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }

  font-size: 4.5rem;
  animation: errorPageHeadingExpand 1s;

  @media (max-width: 500px) {
    font-size: 3.5rem;
  }
`;

const ErrorMsgHeading = styled.h3`
  @keyframes errorCodeFadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  font-size: 2.25rem;
  margin: 25px 0 50px;
  animation: errorCodeFadeIn 1.5s 2s backwards;

  @media (max-width: 500px) {
    font-size: 2rem;
  }
`;

function LandingPage() {
  return (
    <Container>
      <ErrorCodeMsg>Code 404</ErrorCodeMsg>
      <ErrorMsgHeading>{errorMsg}</ErrorMsgHeading>
    </Container>
  );
}

export default LandingPage;
