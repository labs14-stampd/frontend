import React from 'react';

import { Box, Button, Layer, Text } from "grommet";

function ConfirmationLayer({ onClose }) {
  return (
    <Layer position="top" onClickOutside={onClose}>
      <Box pad="large" gap="medium">
        <Text>Are you sure?</Text>
        <Box direction="row" gap="medium" align="center">
          <Button label="Yes" onClick={onClose} />
          <Button label="No" primary={true} onClick={onClose} />
        </Box>
      </Box>
    </Layer>
  );
}

export default ConfirmationLayer;