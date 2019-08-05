import React from 'react';

function Onboard({ history }) {
  return (
    <>
      <button onClick={() => history.push('/onboarding/school')}>I am a School</button>
    </>
  );
}

export default Onboard;
