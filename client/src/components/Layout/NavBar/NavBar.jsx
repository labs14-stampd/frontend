import React from 'react';
import { useStateValue } from 'react-conflux';
import styled from 'styled-components';

import { useAuth0 } from '../../Auth/authWrapper';
import { globalContext } from '../../../store/reducers/globalReducer';

function NavBar() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const [globalState] = useStateValue(globalContext);

  return (
    <NavContainter>
      <img src="" alt="logo" />
      <h1>{globalState.greeting}</h1>
      {!isAuthenticated ? (
        <div className="button-container">
          <button onClick={() => loginWithRedirect({})}>Log in</button>
        </div>
      ) : (
        <div className="button-container">
          <img src="" alt="avatar" />
          <button onClick={() => logout()}>Log out</button>
        </div>
      )}
    </NavContainter>
  );
}

const NavContainter = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #333;
`;

export default NavBar;
