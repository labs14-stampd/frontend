import React from 'react';
import styled from 'styled-components';

import StudentSettings from './StudentSettings/StudentSettings';

const Settings = props => {
  return (
    <Container>
      <StudentSettings {...props} />
    </Container>
  );
};

const Container = styled.section`
  padding: 70px 3% 0;
  margin: 0 auto;
  min-height: calc(100vh - 70px);
  width: 100%;
`;

export default Settings;
