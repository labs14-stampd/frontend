import React from 'react';
import styled from 'styled-components';
import { Trash } from 'grommet-icons';
import { BaseButton } from '../../../styles/themes';

const CredCardDeleteBtn = () => {
  return (
    <CredCardDelBtnContainer>
      <CredCardDeleteButton>
        <Trash />
      </CredCardDeleteButton>
    </CredCardDelBtnContainer>
  );
};

const CredCardDelBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 3%;
`;

const CredCardDeleteButton = styled(BaseButton)``;

export default CredCardDeleteBtn;
