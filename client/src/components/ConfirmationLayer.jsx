import React from 'react';
import PropTypes from 'prop-types';

import { Box, Button, Layer, Text } from 'grommet';

function ConfirmationLayer({ onClose, yesFunc, noFunc, id }) {
  console.log('inside confirm', id);
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
    <Layer position="center" onClickOutside={onClose}>
      <Box pad="large" gap="medium">
        <Text>Are you sure?</Text>
        <Box direction="row" gap="medium" align="center">
          <Button label="Yes" onClick={handleYes} />
          <Button label="No" primary={true} onClick={handleNo} />
        </Box>
      </Box>
    </Layer>
  );
}

ConfirmationLayer.propTypes = {
  onClose: PropTypes.func.isRequired,
  yesFunc: PropTypes.func,
  noFunc: PropTypes.func
};

export default ConfirmationLayer;
