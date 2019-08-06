import React from 'react';
import { useStateValue } from 'react-conflux';
import styled from 'styled-components';
import { BaseButton } from '../../../styles/themes';

import { useAuth0 } from '../../../auth/authWrapper';
import { globalContext } from '../../../store/reducers/globalReducer';

function NavBar(props) {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const [globalState] = useStateValue(globalContext);
  console.log(props);

  return (
    <NavContainter>
      <img src="" alt="logo" />
      <h1>{globalState.greeting}</h1>
      {!isAuthenticated ? (
        <div className="button-container">
          <BaseButton
            a11yTitle="Login"
            type="button"
            color="banana"
            onClick={() => loginWithRedirect({})}
            label="Login"
          />
        </div>
      ) : (
        <div className="button-container">
          <img src="" alt="avatar" />
          <BaseButton
            a11yTitle="Logout"
            type="button"
            color="banana"
            onClick={() => logout()}
            label="Logout"
          />
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
