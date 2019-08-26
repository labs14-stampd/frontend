import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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

CredCardViewBtn.propTypes = {
  getModal: PropTypes.func.isRequired
};

const CardCredBtnContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 3%;
  width: 15%;

  @media (max-width: 500px) {
    width: 100%;
    order: 3;
    margin: 0;
  }
`;

const CardCredViewButton = styled(BaseButton)`
  border-radius: 50px;
  border-color: #adadad;

  @media (max-width: 500px) {
    width: 100%;
    padding: 7px;
    margin-bottom: 15px;
  }

  :hover {
    border-color: #ad91ed;
    background-color: #ad91ed;
    color: white;
  }
`;

export default CredCardViewBtn;
