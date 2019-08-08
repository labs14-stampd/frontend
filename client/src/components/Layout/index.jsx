import React from 'react';
import { Grommet } from 'grommet';
import PropTypes from 'prop-types';
import NavBar from './NavBar';
import Footer from './Footer';
import { theme } from '../../styles/themes';

// GlobalStyles will go here

const Layout = ({ children }) => {
  return (
    <>
      <Grommet theme={theme}>
        <NavBar />
        {children}
        <Footer />
      </Grommet>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Layout;
