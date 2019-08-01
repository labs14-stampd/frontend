import React from 'react';
import { Route } from 'react-router-dom';

import { addRole } from "./onboardQueries";

function Onboard({ history }) {
  const assignSchoolRole = () => {
    addRole({
      id: localStorage.id, 
      roleId: 2 // Role of a school is set to always be 2
    });
    history.push('/onboarding/school');
  };

  return (
    <>
      <button onClick={assignSchoolRole}>I am a School</button>
    </>
  );
}

export default Onboard;
