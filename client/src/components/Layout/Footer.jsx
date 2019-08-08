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
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  width: 100%;
  color: #333333;
  z-index: 0;
  height: 40px;
  margin: 15px 0;

  p {
    font-size: 1.4rem;
  }
`;

export default Footer;

// ${props => props.theme.global.colors['neutral-3']}
// ${props => props.theme.global.colors['accent-3']}
