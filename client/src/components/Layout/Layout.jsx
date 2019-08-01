import React from './node_modules/react';
import NavBar from './navBar/NavBar';
import Footer from './footer/Footer';

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
