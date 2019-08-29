import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { Button } from 'grommet';

import ConfirmationLayerCredView from '../../ConfirmationLayerCredView';

import queries from '../../CredentialView/queries';

const CredCardShareBtn = ({ credId }) => {
  const [
    hasActiveConfirmationDialog,
    setHasActiveConfirmationDialog
  ] = useState(false);

  //  Handling of loading states can be done here as well
  const confirmSendEmail = async email => {
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
      console.error(err);
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

  @media (max-width: 800px) {
    width: 100%;
    order: 3;
    margin: 0;
  }

  @media (max-width: 500px) {
    width: 100%;
    order: 3;
    margin: 0;
  }
`;

const CredCardShareButton = styled(Button)`
  border-radius: 50px;
  border-color: #adadad;
  font-family: 'Roboto', sans-serif;

  @media (max-width: 800px) {
    width: 100%;
    padding: 7px;
    margin-bottom: 15px;
  }

  @media (max-width: 500px) {
    width: 100%;
    padding: 7px;
    margin-bottom: 15px;
  }

  :hover {
    border-color: ${({ theme }) => theme.global.colors.brand};
    background: ${({ theme }) => theme.global.colors.brand};
    color: ${props => props.theme.global.colors['accent-2']};
  }
`;

export default CredCardShareBtn;
