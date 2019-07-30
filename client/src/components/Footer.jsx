import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <span>About</span>
      <span>stampd2019</span>
      <span>Contact Us</span>
    </FooterContainer>
  );
};
const FooterContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  border-top: 1px solid #333;
  position: relative;
  top: 75vh;
`;

export default Footer;
