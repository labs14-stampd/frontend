import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Trash } from 'grommet-icons';
import { toast } from 'react-toastify';
import { BaseButton } from '../../../styles/themes';

import ConfirmationLayerCredView from '../../ConfirmationLayerCredView';

import queries from '../../CredentialView/queries';

const CredCardShareBtn = ({ credId }) => {
  const [
    hasActiveConfirmationDialog,
    setHasActiveConfirmationDialog
  ] = useState(false);

  //  Handling of loading states can be done here as well
  const confirmSendEmail = async email => {
    console.log(email);
    try {
      await queries.shareCredential({
        id: credId,
        email
      });
      toast.success(`Success! Email sent`, {
        className: 'status-ok',
        position: toast.POSITION.BOTTOM_CENTER,
        hideProgressBar: true,
        autoClose: true
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {/* Render the confirmation layer if it is set to be active in this component's local state */}
      {hasActiveConfirmationDialog && (
        // yesFunc for when the "Yes" button is clicked; noFunc for when the "No" button is clicked (both are optional)
        <ConfirmationLayerCredView
          onClose={() => setHasActiveConfirmationDialog(false)} // Needed to make the layer disappear
          yesFunc={confirmSendEmail}
          confirmSendEmail={confirmSendEmail}
        />
      )}

      <CredCardShareBtnContainer>
        <CredCardShareButton
          onClick={() => setHasActiveConfirmationDialog(true)} // This state value setting will cause the layer to appear
          label="Share"
        />
      </CredCardShareBtnContainer>
    </>
  );
};

CredCardShareBtn.propTypes = {
  credId: PropTypes.string.isRequired
};

const CredCardShareBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 3%;
  transition: opacity 0.3s;

  :hover {
    opacity: 0.6;
  }
`;

const ShareButton = styled(BaseButton)``;

const CredCardShareButton = styled(BaseButton)``;

export default CredCardShareBtn;
