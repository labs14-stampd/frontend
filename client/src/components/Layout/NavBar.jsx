import React, { useState } from 'react';
import styled from 'styled-components';
import { Menu, Close } from 'grommet-icons';
import { Box, Button, Layer, Text } from 'grommet';
import { SecondaryButton } from '../../styles/themes';

import { useAuth0 } from '../../auth/authWrapper';

const MenuLayer = ({ onClose }) => (
  <MenuBar
    position="left"
    full="vertical"
    plain={true}
    onClickOutside={() => onClose()}
  >
    <Box background="brand" fill="vertical">
      {['First', 'Second', 'Third'].map(name => (
        <Button
          key={name}
          onClick={onClose}
          hoverIndicator={{ background: 'light-5' }}
        >
          <Box pad={{ horizontal: 'medium', vertical: 'small' }}>
            <Text size="large">{name}</Text>
          </Box>
        </Button>
      ))}
    </Box>
  </MenuBar>
);

function NavBar() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const [isShown, setShown] = useState(false);

  const onClose = () => {
    setShown(false);
  };

  const handleLogout = () => {
    localStorage.clear();
    logout();
  }

  return (
    <NavContainter>
      <nav>
        {isAuthenticated && (
          <Menu
            onClick={() => setShown(!isShown)}
            className="hamburger"
            size="large"
            color="white"
          />
        )}
        {/* <img src="" alt="logo" /> */}
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
              onClick={handleLogout}
              label="Logout"
            />
          </div>
        )}
      </nav>
      {isShown && <MenuLayer onClose={onClose} />}
    </NavContainter>
  );
}

const NavContainter = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  position: fixed;
  padding: 0 3%;
  justify-content: space-between;
  background-color: ${props => props.theme.global.colors.brand};
  align-items: center;
  top: 0;
  -webkit-box-shadow: 0px 0px 15px -2px rgba(0, 0, 0, 0.46);
  -moz-box-shadow: 0px 0px 15px -2px rgba(0, 0, 0, 0.46);
  box-shadow: 0px 0px 15px -2px rgba(0, 0, 0, 0.46);
  z-index: 50;

  nav {
    margin: 0 auto;
    max-width: 1600px;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    svg {
      cursor: pointer;
    }

    .button__container {
      position: absolute;
      right: 0;
      display: flex;
      justify-content: flex-end;
      width: 20%;
    }
  }
`;

const MenuBar = styled(Layer)`
  margin-top: 70px;
  width: 275px;
  height: calc(100vh - 70px);
`;

const NavBtn = styled(SecondaryButton)`
  border: 2px solid white /*${props => props.theme.global.colors['neutral-2']}*/;
  color: white /*${props => props.theme.global.colors['neutral-2']}*/;
`;

export default NavBar;
