import React from 'react';
import styled from 'styled-components';
import { Trash } from 'grommet-icons';

const EmailContainer = ({
  id,
  email,
  setUserEmailIdToDelete,
  setHasActiveConfirmationDialog
}) => {
  return (
    <>
      <EmailCtn>
        <p>{email}</p>
        <TrashButton
          onClick={() => {
            setUserEmailIdToDelete({ id, email });
            setHasActiveConfirmationDialog(true);
          }}
        />
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

  p {
    margin: 4px 0 0;
  }

  :hover {
    -webkit-box-shadow: 0px 0px 15px -2px rgba(173, 145, 237, 1);
    -moz-box-shadow: 0px 0px 15px -2px rgba(173, 145, 237, 1);
    box-shadow: 0px 0px 15px -2px rgba(173, 145, 237, 1);
  }
`;

export default EmailContainer;
