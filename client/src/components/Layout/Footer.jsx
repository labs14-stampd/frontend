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
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  color: #333333;
  padding: 50px 0 10px;
  z-index: 5;

  p {
    font-size: 1.4rem;
  }
`;

export default Footer;

// ${props => props.theme.global.colors['neutral-3']}
// ${props => props.theme.global.colors['accent-3']}
