import React from 'react';
import styled from 'styled-components';
import { Box } from 'grommet';

const index = ({ ...rest }) => {
  return (
    <AnimationBox
      animation={{
        type: 'fadeOut',
        duration: 1750
      }}
      background="light-4"
      round
      {...rest}
    />
  );
};

const AnimationBox = styled(Box)`
  animation-iteration-count: infinite;
`;

export default index;
