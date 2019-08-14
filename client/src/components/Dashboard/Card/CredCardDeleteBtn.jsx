import React, { useState } from 'react';
import { useStateValue } from 'react-conflux';
import styled from 'styled-components';
import { Trash } from 'grommet-icons';
import { toast } from 'react-toastify';
import { BaseButton } from '../../../styles/themes';

import ConfirmationLayer from '../../ConfirmationLayer';

import queries from '../SchoolDashboard/queries';
import {
  schoolContext,
  REMOVE_CREDENTIAL_START,
  REMOVE_CREDENTIAL_SUCCESS,
  REMOVE_CREDENTIAL_ERROR
} from '../../../store/reducers/schoolReducer';

const CredCardDeleteBtn = ({ credId, credHash }) => {
  const [, dispatch] = useStateValue(schoolContext);

  const [
    hasActiveConfirmationDialog,
    setHasActiveConfirmationDialog
  ] = useState(false);

  //  Handling of loading states can be done here as well
  const confirmRemoveCredential = async e => {
    try {
      dispatch({ type: REMOVE_CREDENTIAL_START });
      await queries.removeCredential(credId, credHash);
      toast.dismiss(1);
      toast.success(`Success! Credential deleted`, {
        className: 'status-ok',
        position: toast.POSITION.BOTTOM_CENTER,
        hideProgressBar: true,
        autoClose: true
      });
      dispatch({ type: REMOVE_CREDENTIAL_SUCCESS, payload: { credId } });
    } catch {
      dispatch({ type: REMOVE_CREDENTIAL_ERROR });
    }
  };

  return (
    <>
      {/* Render the confirmation layer if it is set to be active in this component's local state */}
      {hasActiveConfirmationDialog && (
        // yesFunc for when the "Yes" button is clicked; noFunc for when the "No" button is clicked (both are optional)
        <ConfirmationLayer
          onClose={() => setHasActiveConfirmationDialog(false)} // Needed to make the layer disappear
          yesFunc={confirmRemoveCredential}
        />
      )}

      <CredCardDelBtnContainer>
        <CredCardDeleteButton
          onClick={() => setHasActiveConfirmationDialog(true)} // This state value setting will cause the layer to appear
        >
          <TrashButton />
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
  transition: opacity 0.3s;

  :hover {
    opacity: 0.6;
  }
`;

const TrashButton = styled(Trash)`
  cursor: pointer;
`;

const CredCardDeleteButton = styled(BaseButton)``;

export default CredCardDeleteBtn;
