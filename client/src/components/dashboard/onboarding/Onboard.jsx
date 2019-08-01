import React from 'react';
import { Route } from 'react-router-dom';

function Onboard({ history }) {
  const addRole = ({ id, roleId }) => {
    history.push('/onboarding/school');
  };
  return (
    <>
      <button onClick={addRole}>School</button>
    </>
  );
}

export default Onboard;
