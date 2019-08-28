import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Box, Button, Layer, Text } from 'grommet';

function ConfirmationLayer({ onClose, yesFunc, noFunc }) {
  const handleYes = e => {
    if (typeof yesFunc === 'function') {
      yesFunc();
    }
    onClose();
  };

  const handleNo = e => {
    if (typeof noFunc === 'function') {
      noFunc();
    }
    onClose();
  };

  return (
    <ConfirmationContainer onClickOutside={onClose}>
      <Box pad="large" gap="medium">
        <Text>Are you sure?</Text>
        <Box direction="row" gap="medium" align="center">
          <Button label="Yes" onClick={handleYes} />
          <Button label="No" primary onClick={handleNo} />
        </Box>
      </Box>
    </ConfirmationContainer>
  );
}

ConfirmationLayer.defaultProps = {
  noFunc: null
}

ConfirmationLayer.propTypes = {
  onClose: PropTypes.func.isRequired,
  yesFunc: PropTypes.func.isRequired,
  noFunc: PropTypes.func
};

const ConfirmationContainer = styled(Layer)`
  position: center;

  @media (max-width: 500px) {
    padding: 100px 0 0;
    width: 100%;

    div {
      width: 100%;
      margin: 0 auto;

      span {
        width: 100%;
        text-align: center;
        font-size: 2.4rem;
        margin-bottom: 10px;
      }

      div {
        width: 50%;
        display: flex;
        justify-content: space-between;
        flex-direction: column;

        button {
          margin: 0 0 10px;
          width: 100%;
        }
      }
    }
  }
`;

export default ConfirmationLayer;
