import React, { useState, useEffect, useContext } from 'react';
import createAuth0Client from '@auth0/auth0-spa-js';
import { useStateValue } from 'react-conflux';
import jwt from 'jsonwebtoken';
import PropTypes from 'prop-types';
import {
  globalContext,
  REGISTER,
  SET_ONBOARDED_TRUE
} from '../store/reducers/globalReducer';
import queries from './authQueries';

const DEFAULT_REDIRECT_CALLBACK = () =>
  window.history.replaceState({}, document.title, window.location.pathname);

export const Auth0Context = React.createContext();
export const useAuth0 = () => useContext(Auth0Context);
export const Auth0Provider = ({
  history,
  match,
  children,
  onRedirectCallback = DEFAULT_REDIRECT_CALLBACK,
  ...initOptions
}) => {
  const [, dispatchGlobal] = useStateValue(globalContext);
  const [isAuthenticated, setIsAuthenticated] = useState();
  const [user, setUser] = useState();
  const [auth0Client, setAuth0] = useState();
  const [loading, setLoading] = useState(true);
  const [popupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    const initAuth0 = async () => {
      const auth0FromHook = await createAuth0Client(initOptions);
      setAuth0(auth0FromHook);

      if (window.location.search.includes('code=')) {
        const { appState } = await auth0FromHook.handleRedirectCallback();
        onRedirectCallback(appState);
      }

      const isAuthenticatedFromAuth0 = await auth0FromHook.isAuthenticated();

      setIsAuthenticated(isAuthenticatedFromAuth0);

      if (isAuthenticatedFromAuth0) {
        const userFromAuth0 = await auth0FromHook.getUser();

        // Change property name from nickname to username
        userFromAuth0.username = userFromAuth0.nickname;
        userFromAuth0.nickname = undefined;

        setUser(userFromAuth0);

        const authToken = jwt.sign(
          userFromAuth0,
          process.env.REACT_APP_AUTH_TOKEN
        );

        try {
          const result = await queries.register({ authToken });
          localStorage.token = result.data.addUser.token;
          dispatchGlobal({ type: REGISTER, payload: result.data.addUser });

          if (result.data.addUser.roleId === null) {
            history.push('/onboarding');
          } else {
            dispatchGlobal({ type: SET_ONBOARDED_TRUE });
            if (!window.location.href.includes('/view/')) {
              history.push('/dashboard');
            } 
          }
        } catch (error) {
          console.error(error);
        }
      }

      setLoading(false);
    };
    initAuth0();
    // eslint-disable-next-line
  }, []);

  const loginWithPopup = async (params = {}) => {
    setPopupOpen(true);
    try {
      await auth0Client.loginWithPopup(params);
    } catch (error) {
      console.error(error);
    } finally {
      setPopupOpen(false);
    }
    const userFromAuth0 = await auth0Client.getUser();
    setUser(userFromAuth0);
    setIsAuthenticated(true);
  };

  const handleRedirectCallback = async () => {
    setLoading(true);
    await auth0Client.handleRedirectCallback();
    const userFromAuth0 = await auth0Client.getUser();
    setLoading(false);
    setIsAuthenticated(true);
    setUser(userFromAuth0);
  };
  return (
    <Auth0Context.Provider
      value={{
        isAuthenticated,
        user,
        loading,
        popupOpen,
        loginWithPopup,
        handleRedirectCallback,
        getIdTokenClaims: (...p) => auth0Client.getIdTokenClaims(...p),
        loginWithRedirect: (...p) => auth0Client.loginWithRedirect(...p),
        getTokenSilently: (...p) => auth0Client.getTokenSilently(...p),
        getTokenWithPopup: (...p) => auth0Client.getTokenWithPopup(...p),
        logout: (...p) => auth0Client.logout(...p)
      }}
    >
      {children}
    </Auth0Context.Provider>
  );
};

Auth0Provider.propTypes = {
  history: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  onRedirectCallback: PropTypes.func.isRequired
};
