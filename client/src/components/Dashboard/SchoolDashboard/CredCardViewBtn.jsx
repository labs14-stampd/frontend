import React from 'react';
import styled from 'styled-components';
import { BaseButton } from '../../../styles/themes';

const CredCardViewBtn = () => {
  return (
    <CardCredBtnContainer>
      <CardCredViewButton label="View" a11yTitle="view credentials button" />
    </CardCredBtnContainer>
  );
};

const CardCredBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 3%;
`;

const CardCredViewButton = styled(BaseButton)`
  border-radius: 5%;
  border-color: #e3e3e3;

  :hover {
    border-color: #7d4cdb;
    background-color: #7d4cdb;
    color: white;
  }
`;

export default CredCardViewBtn;
