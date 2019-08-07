import React from 'react';
import PropTypes from 'prop-types';
import { BaseButton } from '../../../styles/themes';

function Onboard({ history }) {
  console.log('dsahfdfdofdosodfo');
  return (
    <>
      <BaseButton
        type="button"
        onClick={() => history.push('/onboarding/school')}
        label="I am a School"
      />
    </>
  );
}

Onboard.propTypes = {
  history: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default Onboard;
