import React from 'react';
import PropTypes from 'prop-types';
import { StmpdBtn } from '../../../styles/themes';

function Onboard({ history }) {
  return (
    <>
      <StmpdBtn
        type="button"
        onClick={() => history.push('/onboarding/school')}
      >
        I am a School
      </StmpdBtn>
    </>
  );
}

Onboard.propTypes = {
  history: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default Onboard;
