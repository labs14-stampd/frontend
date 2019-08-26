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
`;

const CardCredViewButton = styled(BaseButton)`
  border-radius: 50px;
  border-color: #adadad;

  :hover {
    border-color: #ad91ed;
    background-color: #ad91ed;
    color: white;
  }
`;

export default CredCardViewBtn;
