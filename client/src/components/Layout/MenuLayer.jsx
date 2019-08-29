import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Box, Button, Layer, Text } from 'grommet';
import PropTypes from 'prop-types';
import { useStateValue } from 'react-conflux';
import { globalContext } from '../../store/reducers/globalReducer';
import {
  schoolContext,
  CLEAR_SEARCH_INPUT
} from '../../store/reducers/schoolReducer';
import { studentContext } from '../../store/reducers/studentReducer';
import c from '../../store/constants';

const MenuLayer = ({ isShown, toggleOpen, history, setLoading }) => {
  const [{ user }] = useStateValue(globalContext);
  const [, schoolDispatch] = useStateValue(schoolContext);
  const [, studentDispatch] = useStateValue(studentContext);
  const navRoute = (e, route) => {
    e.preventDefault();
    schoolDispatch({ type: CLEAR_SEARCH_INPUT });
    studentDispatch({ type: CLEAR_SEARCH_INPUT });
    history.push(route);
    setLoading(false);
    toggleOpen();
  };
  const menuArray = user.roleId === '2' ? c.schoolRoutes : c.studentRoutes;
  return (
    <MenuBar
      className={isShown && 'menu--shown'}
      position="left"
      full="vertical"
      plain={false}
      onClickOutside={() => toggleOpen()}
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
  setLoading: PropTypes.func.isRequired,
  toggleOpen: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

const menuOpen = keyframes`
  0% {
    display: block;
  }
  1% {
    margin: 70px 0 0 -275px;
  }
  100% {
    margin: 70px 0 0;
  }
`;

const MenuBar = styled(Layer)`
  margin: 70px 0 0 -275px;
  width: 275px;
  height: calc(100vh - 70px);
  background: #7d4cdb;
  font-family: 'Roboto', sans-serif;

  &.menu--shown {
    animation: 0.3s ${menuOpen} forwards;
  }

  div {
    .navbar__link {
      transition: opacity 0.3s, color 0.3s;

      :hover {
        opacity: 0.8;
        color: #fd6fff;
      }
    }
  }
`;

export default MenuLayer;
