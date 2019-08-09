import React from 'react';
import styled from 'styled-components';

const errorMsg = 'Oops, this is not the page you are looking for....';

const Container = styled.main`
  margin: 100px 5% 50px;
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
  margin: 25px 0  50px;
  animation: errorCodeFadeIn 1.5s 2s backwards;
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