import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <p>© Stampd 2019</p>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  bottom: 0;
  width: 100%;
  background: #f8f8f8;
  text-align: center;
  z-index: 0;

  p {
    color: #adadad;
    margin: 0 auto;
    text-align: center;
    width: 200px;
  }
`;

export default Footer;
