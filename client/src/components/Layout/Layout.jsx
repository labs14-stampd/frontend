import React from 'react';
import { NavBar } from './navBar';
import { Footer } from './footer';

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
