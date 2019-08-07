import React from 'react';
import { useStateValue } from 'react-conflux';
import styled from 'styled-components';
import { Menu } from 'grommet-icons';
import { BaseButton } from '../../../styles/themes';

import { useAuth0 } from '../../../auth/authWrapper';
import { globalContext } from '../../../store/reducers/globalReducer';

function NavBar(props) {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const [globalState] = useStateValue(globalContext);

  return (
    <NavContainter>
      <Menu size='large' color='accent-1' />
      <img src="" alt="logo" />
      <h1>{globalState.greeting}</h1>
      {!isAuthenticated ? (
        <div className="button-container">
          <LoginBtn
            {...props}
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
  justify-content: space-between;
  border-bottom: 1px solid #333;
  background-color: ${props => props.theme.global.colors['brand']}
`;

const LoginBtn = styled(BaseButton)`
  border: 2px solid ${props => props.theme.global.colors['accent-1']};
  color: ${props => props.theme.global.colors['accent-1']}
`;

export default NavBar;
