import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import NavBar from './NavBar';
import Footer from './Footer';

// GlobalStyles will go here

const Layout = ({ children, history }) => {
  return (
    <>
      <Container>
        <NavBar history={history} />
        {children}
        <Footer />
      </Container>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  history: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

const Container = styled.main`
  width: 100%;
  position: relative;

  .brand-background {
    background: #7d4cdb;
  }
  .status-ok {
    background: #00c781;
  }
`;

export default Layout;
