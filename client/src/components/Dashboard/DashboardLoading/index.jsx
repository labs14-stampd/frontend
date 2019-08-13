import React from 'react';
import styled from 'styled-components';
import { Grid } from 'grommet';

import AnimatedBox from './StyledPlaceHolderBox';

const index = () => {
  return (
    <DashboardLoadingContainer>
      <Grid
        areas={[
          { name: 'card0', start: [0, 0], end: [2, 1] },
          { name: 'card1', start: [0, 1], end: [2, 1] },
          { name: 'card2', start: [0, 2], end: [2, 2] },
          { name: 'card3', start: [0, 3], end: [2, 3] },
          { name: 'card4', start: [0, 4], end: [2, 4] }
        ]}
        columns={['small', 'flex', 'small']}
        rows={['110px', '110px', '110px', '110px', '110px']}
        gap="small"
      >
        <AnimatedBox gridArea="card0" background="light-2" />
        <AnimatedBox gridArea="card1" background="light-2" />
        <AnimatedBox gridArea="card2" background="light-2" />
        <AnimatedBox gridArea="card3" background="light-2" />
        <AnimatedBox gridArea="card4" background="light-2" />
      </Grid>
    </DashboardLoadingContainer>
  );
};

const DashboardLoadingContainer = styled.div`
  margin: 20px auto 0;
  max-width: 1600px;
  width: 100%;
`;

export default index;
