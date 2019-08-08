import React from 'react';
import { Grommet } from 'grommet';
import PropTypes from 'prop-types';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import { theme } from '../../styles/themes';
import styled from 'styled-components';

// GlobalStyles will go here

const Layout = ({ children }) => {
  return (
    <>
      <Grommet theme={theme}>
        <Container>
          <NavBar />
          {children}
          <Footer />
        </Container>
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

const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  position: relative;
`;

export default Layout;
