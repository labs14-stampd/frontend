import React from 'react';
import { Grid } from 'grommet';

import AnimatedBox from './StyledPlaceHolderBox';

const index = () => {
  return (
    <Grid
      areas={[
        { name: 'card1', start: [0, 1], end: [2, 1] },
        { name: 'card2', start: [0, 2], end: [2, 2] },
        { name: 'card3', start: [0, 3], end: [2, 3] },
        { name: 'card4', start: [0, 4], end: [2, 4] }
      ]}
      columns={['small', 'flex', 'small']}
      rows={['xsmall', 'xsmall', 'xsmall', 'xsmall', 'xsmall']}
      gap="small"
    >
      <AnimatedBox gridArea="card1" background="light-2" />
      <AnimatedBox gridArea="card2" background="light-2" />
      <AnimatedBox gridArea="card3" background="light-2" />
      <AnimatedBox gridArea="card4" background="light-2" />
    </Grid>
  );
};

export default index;
