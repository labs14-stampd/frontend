import React from 'react';
import PropTypes from 'prop-types';

function Onboard({ history }) {
  return (
    <>
      <button type="button" onClick={() => history.push('/onboarding/school')}>
        I am a School
      </button>
    </>
  );
}

Onboard.propTypes = {
  history: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default Onboard;
