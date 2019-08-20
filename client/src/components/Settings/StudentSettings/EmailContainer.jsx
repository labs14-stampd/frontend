import React from 'react';
import styled from 'styled-components';
import { Trash } from 'grommet-icons';

import ConfirmationLayer from '../../ConfirmationLayer';

const EmailContainer = ({
  id,
  email,
  setUserEmailIdToDelete,
  setHasActiveConfirmationDialog
}) => {
  const [emailId, setEmailId] = React.useState(id);
  return (
    <>
      <EmailCtn>
        <p>{email}</p>
        <p>{id}</p>
        <TrashButton
          onClick={() => {
            setUserEmailIdToDelete(id);
            setHasActiveConfirmationDialog(true);
          }}
        />{' '}
      </EmailCtn>
    </>
  );
};

const TrashButton = styled(Trash)`
  cursor: pointer;
`;

const EmailCtn = styled.section`
  margin: 10px auto 0;
  max-width: 800px;
  width: 100%;
  background: white;
  /* min-height: calc(100vh - 170px); */
  -webkit-box-shadow: -2px 5px 25px -17px rgba(0, 0, 0, 0.61);
  -moz-box-shadow: -2px 5px 25px -17px rgba(0, 0, 0, 0.61);
  box-shadow: -2px 5px 25px -17px rgba(0, 0, 0, 0.61);
  border-radius: 2px;
  display: flex;
  justify-content: space-between;
  padding: 20px 3%;
  transition: box-shadow 0.5s;

  :hover {
    -webkit-box-shadow: 0px 0px 15px -2px rgba(125, 76, 219, 1);
    -moz-box-shadow: 0px 0px 15px -2px rgba(125, 76, 219, 1);
    box-shadow: 0px 0px 15px -2px rgba(125, 76, 219, 1);
  }
`;

export default EmailContainer;
