import React from 'react';
import PropTypes from 'prop-types';
import NavBar from './NavBar';
import Footer from './Footer';

// GlobalStyles will go here

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
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
