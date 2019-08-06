import React from 'react';
import PropTypes from 'prop-types';

function Onboard({ history }) {
  console.log(history);
  return (
    <>
      <button type="button" onClick={() => history.push('/onboarding/school')}>
        I am a School
      </button>
    </>
  );
}

Onboard.propTypes = {
  history: PropTypes.object
};

export default Onboard;
