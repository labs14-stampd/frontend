import React from 'react';
import styled from 'styled-components';
import { Trash } from 'grommet-icons';
import { BaseButton } from '../../../styles/themes';

import ConfirmationLayer from '../../ConfirmationLayer';

const CredCardDeleteBtn = () => {
  const [
    hasActiveConfirmationDialog,
    setHasActiveConfirmationDialog
  ] = React.useState(false);

  return (
    <>
      {hasActiveConfirmationDialog && (
        <ConfirmationLayer
          onClose={() => setHasActiveConfirmationDialog(false)}
          yesFunc={() => alert('Confirms deletion....')}
          noFunc={() => alert('Negates deletion...')}
        />
      )}

      <CredCardDelBtnContainer>
        <CredCardDeleteButton
          onClick={() => setHasActiveConfirmationDialog(true)}
        >
          <Trash />
        </CredCardDeleteButton>
      </CredCardDelBtnContainer>
    </>
  );
};

const CredCardDelBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 3%;
  cursor: pointer;
  transition: opacity 0.3s;

  :hover {
    opacity: 0.6;
  }
`;

const CredCardDeleteButton = styled(BaseButton)``;

export default CredCardDeleteBtn;
