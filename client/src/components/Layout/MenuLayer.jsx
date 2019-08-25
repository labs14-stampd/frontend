import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { Box, Button, Layer, Text } from 'grommet';
import PropTypes from 'prop-types';
import { useStateValue } from 'react-conflux';
import { globalContext } from '../../store/reducers/globalReducer';
import c from '../../store/constants';

const MenuLayer = ({ isShown, onClose, history }) => {
  const [{ user }] = useStateValue(globalContext);
  const navRoute = (e, route) => {
    e.preventDefault();
    history.push(route);
    onClose();
  };
  const menuArray = user.roleId === '2' ? c.schoolRoutes : c.studentRoutes;
  return (
    <MenuBar
      className={isShown && 'menu-bar__shown'}
      position="left"
      full="vertical"
      plain
      onClickOutside={() => onClose()}
      isShown={isShown}
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
  isShown: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

const menuSlide = keyframes`
  0% {
    margin: 70px 0 0 -275px;
  }
  100% {
    margin: 70px 0 0;
  }
`;

const MenuBar = styled(Layer)`
  padding: 0;
  width: 275px;
  height: calc(100vh - 70px);
  animation: none;
  ${props =>
    props.isShown &&
    css`
      animation: 0.3s ${menuSlide} forwards;
    `}

  .navbar__link {
    transition: opacity 0.3s;

    :hover {
      opacity: 0.6;
    }
  }
`;

export default MenuLayer;
