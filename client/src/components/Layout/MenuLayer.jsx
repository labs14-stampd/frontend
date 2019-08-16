import React from 'react';
import styled from 'styled-components';
import { Box, Button, Layer, Text } from 'grommet';
import PropTypes from 'prop-types';
import { useStateValue } from 'react-conflux';
import { globalContext } from '../../store/reducers/globalReducer';

const MenuLayer = ({ onClose, history }) => {
  const [{ user }] = useStateValue(globalContext);
  const navRoute = (e, route) => {
    e.preventDefault();
    history.push(route);
    onClose();
  };
  const menuArray =
    user.roleId === '2'
      ? [
          { name: 'Dashboard', route: '/dashboard' },
          { name: 'Issue Credential', route: '/dashboard/credForm' },
          { name: 'Settings', route: '/settings' },
          { name: 'About', route: '/about' },
          { name: 'Contact', route: '/contact' }
        ]
      : [
          { name: 'Dashboard', route: '/dashboard' },
          { name: 'Settings', route: '/settings' },
          { name: 'About', route: '/about' },
          { name: 'Contact', route: '/contact' }
        ];
  return (
    <MenuBar
      position="left"
      full="vertical"
      plain
      onClickOutside={() => onClose()}
    >
      <Box pad="medium" background="brand" fill="vertical">
        {menuArray.map(navItem => (
          <Button
            key={navItem.name}
            onClick={e => navRoute(e, navItem.route)}
            hoverIndicator={{ background: 'red' }}
          >
            <Box pad={{ horizontal: 'medium', vertical: 'small' }}>
              <Text className="navbar__link" size="large">
                {navItem.name}
              </Text>
            </Box>
          </Button>
        ))}
      </Box>
    </MenuBar>
  );
};

MenuLayer.propTypes = {
  onClose: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

const MenuBar = styled(Layer)`
  margin-top: 70px;
  width: 275px;
  height: calc(100vh - 70px);
  animation: none;
  transition: 0.3s;

  .navbar__link {
    transition: opacity 0.3s;

    :hover {
      opacity: 0.6;
    }
  }
`;

export default MenuLayer;
