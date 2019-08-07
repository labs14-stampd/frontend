import React from 'react';
import { useStateValue } from 'react-conflux';
import styled from 'styled-components';
import { Menu } from 'grommet-icons';
import { SecondaryButton } from '../../../styles/themes';

import { useAuth0 } from '../../../auth/authWrapper';
import { globalContext } from '../../../store/reducers/globalReducer';

function NavBar() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const [globalState] = useStateValue(globalContext);

  return (
    <NavContainter>
      <nav>
        <Menu size="large" color="white" />
        {/* <img src="" alt="logo" /> */}
        {/* <Logoh1>{globalState.greeting}</Logoh1> */}
        {!isAuthenticated ? (
          <div className="button__container">
            <NavBtn
              a11yTitle="Login"
              type="button"
              onClick={() => loginWithRedirect({})}
              label="Login"
            />
          </div>
        ) : (
          <div className="button__container">
            {/* <img src="" alt="avatar" /> */}
            <NavBtn
              a11yTitle="Logout"
              type="button"
              onClick={() => logout()}
              label="Logout"
            />
          </div>
        )}
      </nav>
    </NavContainter>
  );
}

const NavContainter = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  position: fixed;
  justify-content: space-between;
  background-color: ${props => props.theme.global.colors.brand};
  align-items: center;
  top: 0;
  -webkit-box-shadow: 0px 7px 53px -20px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 7px 53px -20px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 7px 53px -20px rgba(0, 0, 0, 0.75);

  nav {
    margin: 0 auto;
    max-width: 1600px;
    padding: 0 3%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .button__container {
      display: flex;
      justify-content: flex-end;
      width: 20%;
    }
  }
`;

const NavBtn = styled(SecondaryButton)`
  border: 2px solid white /*${props => props.theme.global.colors['neutral-2']}*/;
  color: white /*${props => props.theme.global.colors['neutral-2']}*/;
`;

const LogoH1 = styled.h1`
  color: white;
`;

export default NavBar;

// ${props => props.theme.global.colors['accent-3']}
// ${props => props.theme.global.colors['brand']}
