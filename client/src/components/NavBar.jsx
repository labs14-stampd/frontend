import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '../react-auth0-wrapper';

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect({})}>Log in</button>
      )}

      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}

      {isAuthenticated && (
        <span>
          <Link to="/">Landing Page</Link>&nbsp;
          <Link to="/home">Home</Link>
        </span>
      )}
    </div>
  );
};

export default NavBar;
