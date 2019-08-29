import React, { useState } from 'react';
import Loader from 'react-loader-spinner';
import { useStateValue } from 'react-conflux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Trash } from 'grommet-icons';
import { toast } from 'react-toastify';
import { BaseButton } from '../../../styles/themes';

import ConfirmationLayer from '../../ConfirmationLayer';

import queries from '../Dashboard/queries';
import {
  schoolContext,
  REMOVE_CREDENTIAL_START,
  REMOVE_CREDENTIAL_SUCCESS,
  REMOVE_CREDENTIAL_ERROR
} from '../../../store/reducers/schoolReducer';

const CredCardDeleteBtn = ({ credId, credHash }) => {
  const [, dispatch] = useStateValue(schoolContext);
  const [isDeleting, setIsDeleting] = useState(false);

  const [
    hasActiveConfirmationDialog,
    setHasActiveConfirmationDialog
  ] = useState(false);

  //  Handling of loading states can be done here as well
  const confirmRemoveCredential = async () => {
    setIsDeleting(true);
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
      setIsDeleting(false);
    } catch {
      dispatch({ type: REMOVE_CREDENTIAL_ERROR });
      setIsDeleting(false);
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

      <CredCardDelBtnContainer
        onClick={isDeleting ? null : () => setHasActiveConfirmationDialog(true)} // This state value setting will cause the layer to appear
      >
        <CredCardDeleteButton>
          {isDeleting ? (
            <Loader type="Oval" color="#adadad" height={30} width={30} />
          ) : (
            <TrashButton />
          )}
        </CredCardDeleteButton>
      </CredCardDelBtnContainer>
    </>
  );
};

CredCardDeleteBtn.propTypes = {
  credId: PropTypes.string.isRequired,
  credHash: PropTypes.string.isRequired
};

const CredCardDelBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 3%;
  transition: opacity 0.3s;

  @media (max-width: 800px) {
    width: 100%;
    border: 2px solid #adadad;
    border-radius: 50px;
    order: 6;
    margin: 0 0 15px;
    cursor: pointer;
    transition: none;

    :hover {
      border-color: #fd6fff;
      opacity: 1;
    }
  }

  :hover {
    opacity: 0.75;
  }

  @media (max-width: 800px) {
    width: 100%;
    border: 2px solid #adadad;
    border-radius: 50px;
    order: 6;
    margin: 0 0 15px;
    cursor: pointer;
    transition: none;

    :hover {
      border-color: #fd6fff;
      opacity: 1;
    }
  }

  @media (max-width: 500px) {
    width: 100%;
    border: 2px solid #adadad;
    border-radius: 50px;
    order: 6;
    margin: 0 0 15px;
    cursor: pointer;
    transition: none;

    :hover {
      border-color: #fd6fff;
      opacity: 1;
    }
  }

  :hover {
    opacity: 0.75;
  }
`;

const TrashButton = styled(Trash)`
  cursor: pointer;
  margin: 6px 0 2px;
  padding: 0;
`;

const CredCardDeleteButton = styled(BaseButton)`
  margin: 0;
  padding: 0;
`;

export default CredCardDeleteBtn;
