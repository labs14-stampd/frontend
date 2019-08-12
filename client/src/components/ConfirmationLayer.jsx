import React from 'react';

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
    <Layer position="top" onClickOutside={onClose}>
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

export default ConfirmationLayer;
