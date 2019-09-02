import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useStateValue } from 'react-conflux';
import { SecondaryButton } from '../../styles/themes';

import { useAuth0 } from '../../auth/authWrapper';
import { globalContext, LOGOUT } from '../../store/reducers/globalReducer';
import MenuLayer from './MenuLayer';
import stampdLogoWhite from '../../images/stampd_full_white.png';
import MenuButton from './MenuButton';

function NavBar({ history }) {
  const [{ onboarded }, globalDispatch] = useStateValue(globalContext);
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const [isShown, setShown] = useState(false);
  const [loading, setLoading] = useState(true);

  const toggleOpen = () => {
    setShown(!isShown);
    setLoading(false);
  };

  const handleLogout = () => {
    globalDispatch({
      type: LOGOUT,
      payload: false
    });
    localStorage.clear();
    setShown(false);
    setLoading(false);
    logout();
  };

  return (
    <NavContainter>
      <nav>
        <div className="left-section">
          {onboarded && (
            <MenuButton
              className="hamburger"
              setShown={setShown}
              isShown={isShown}
              onClose={toggleOpen}
              setLoading={setLoading}
              loading={loading}
            />
          )}
          <div className="logo">
            <Link to={onboarded ? '/dashboard' : '/'}>
              <img src={stampdLogoWhite} alt="Stampd logo" draggable="false" />
            </Link>
          </div>
        </div>
        <RightSection>
          <LinksSection>
            {!isAuthenticated && (
              <p>
                <Link to="/about">About Us</Link>
              </p>
            )}
            {!isAuthenticated && (
              <p>
                <Link to="/contact">Contact</Link>
              </p>
            )}
          </LinksSection>
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
        </RightSection>
      </nav>
      {isShown && (
        <MenuLayer
          loading={loading}
          setLoading={setLoading}
          toggleOpen={toggleOpen}
          isShown={isShown}
          setShown={setShown}
          history={history}
        />
      )}
    </NavContainter>
  );
}

NavBar.propTypes = {
  history: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

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
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    .left-section {
      display: flex;
      align-items: center;

      .logo {
        width: 113px;
        height: auto;

        @media (max-width: 500px) {
          display: none;
        }

        a {
          display: flex;
          align-content: center;
        }
      }

      .hamburger {
        cursor: pointer;
      }
    }
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 300px;

  p {
    color: white;
  }

  .button__container {
    right: 0;
    display: flex;
    justify-content: flex-end;
  }
`;

const NavBtn = styled(SecondaryButton)`
  border: 2px solid white /*${props => props.theme.global.colors['neutral-2']}*/;
  color: white /*${props => props.theme.global.colors['neutral-2']}*/;
  transition: background 0.3s, color 0.3s;

  :hover {
    color: ${({ theme }) => theme.global.colors.brand};
    background: ${({ theme }) => theme.global.colors.navbarHoverBg};
  }
`;

const LinksSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-right: 3%;
  p {
    margin-right: 7px;
    a {
      color: white;
      :hover {
        text-decoration: underline;
      }
    }
  }
`;

export default NavBar;
