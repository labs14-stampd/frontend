import React from 'react';
import { useStateValue } from 'react-conflux';
import styled from 'styled-components';
import { StmpdBtn, theme } from '../../../styles/themes';
import { Button } from 'grommet';

import { useAuth0 } from '../../../auth/authWrapper';
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
          <StmpdBtn
            a11yTitle="Login"
            type="button"
            color={theme.global.colors.primary}
            onClick={() => loginWithRedirect({})}
            label="Login"
          />
        </div>
      ) : (
        <div className="button-container">
          <img src="" alt="avatar" />
          <button type="button" onClick={() => logout()}>
            Log out
          </button>
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
