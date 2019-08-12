import React from 'react';
import styled from 'styled-components';
import { Box, Button, Layer, Text } from 'grommet';
import PropTypes from 'prop-types';

const MenuLayer = ({ onClose, history }) => {
  const navRoute = (e, route) => {
    e.preventDefault();
    history.push(route);
    onClose();
  };
  return (
    <MenuBar
      position="left"
      full="vertical"
      plain
      onClickOutside={() => onClose()}
    >
      <Box pad="medium" background="brand" fill="vertical">
        {[
          { name: 'Dashboard', route: '/dashboard' },
          { name: 'Issue Credential', route: '/dashboard/credForm' },
          { name: 'About', route: '/about' },
          { name: 'Contact', route: '/contact' }
        ].map(navItem => (
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
  onClose: PropTypes.func.isRequired
};

const MenuBar = styled(Layer)`
  margin-top: 70px;
  width: 275px;
  height: calc(100vh - 70px);

  .navbar__link {
    transition: opacity 0.3s;

    :hover {
      opacity: 0.6;
    }
  }
`;

export default MenuLayer;
