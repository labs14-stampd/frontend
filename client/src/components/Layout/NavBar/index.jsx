import React from 'react';
import { useStateValue } from 'react-conflux';
import styled from 'styled-components';
import { Menu } from 'grommet-icons';
import { BaseButton } from '../../../styles/themes';

import { useAuth0 } from '../../../auth/authWrapper';
import { globalContext } from '../../../store/reducers/globalReducer';

function NavBar() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const [globalState] = useStateValue(globalContext);

  return (
    <NavContainter>
      <Menu size="large" color="white" />
      {/* <img src="" alt="logo" /> */}
      <Logoh1>{globalState.greeting}</Logoh1>
      {!isAuthenticated ? (
        <div className="button-container">
          <LoginBtn
            a11yTitle="Login"
            type="button"
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
  width: 100%;
  position: fixed;
  justify-content: space-between;
  background-color: ${props => props.theme.global.colors['brand']};
  align-items: center;
  border-bottom: 2px solid #82fdff;
`;

const LoginBtn = styled(BaseButton)`
  border: 2px solid white /*${props => props.theme.global.colors['neutral-2']}*/;
  color: white /*${props => props.theme.global.colors['neutral-2']}*/;
`;

const Logoh1 = styled.h1`
  color: white;
`;

export default NavBar;

//${props => props.theme.global.colors['accent-3']}
//${props => props.theme.global.colors['brand']}
