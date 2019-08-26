import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Trash } from 'grommet-icons';
import { toast } from 'react-toastify';
import { BaseButton } from '../../../styles/themes';

import ConfirmationLayer from '../../ConfirmationLayer';

import queries from '../Dashboard/queries';

const CredCardShareBtn = ({ credId, credHash }) => {
  const [
    hasActiveConfirmationDialog,
    setHasActiveConfirmationDialog
  ] = useState(false);

  //  Handling of loading states can be done here as well
  const confirmSendEmail = async () => {
    try {
      await queries.removeCredential(credId, credHash);
      toast.success(`Success! Email sent`, {
        className: 'status-ok',
        position: toast.POSITION.BOTTOM_CENTER,
        hideProgressBar: true,
        autoClose: true
      });
    } catch (err) {
      console.log(err)
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
          onClick={
            isDeleting ? null : () => setHasActiveConfirmationDialog(true)
          } // This state value setting will cause the layer to appear
        >
          {isDeleting ? (
            <Loader type="Oval" color="#d8d8d8" height={30} width={30} />
          ) : (
            <TrashButton />
          )}
        </CredCardDeleteButton>
      </CredCardDelBtnContainer>
    </>
  );
};

CredCardShareBtn.propTypes = {
  credId: PropTypes.string.isRequired,
  credHash: PropTypes.string.isRequired
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

export default CredCardShareBtn;
