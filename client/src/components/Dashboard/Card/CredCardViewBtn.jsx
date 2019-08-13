import React from 'react';
import styled from 'styled-components';
import { BaseButton } from '../../../styles/themes';

const CredCardViewBtn = ({ getModal }) => {
  return (
    <CardCredBtnContainer>
      <CardCredViewButton
        label="View"
        a11yTitle="view credentials button"
        onClick={getModal}
      />
    </CardCredBtnContainer>
  );
};

const CardCredBtnContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 3%;
  width: 15%;
`;

const CardCredViewButton = styled(BaseButton)`
  border-radius: 50px;
  border-color: #e3e3e3;

  :hover {
    border-color: #7d4cdb;
    background-color: #7d4cdb;
    color: white;
  }
`;

export default CredCardViewBtn;
