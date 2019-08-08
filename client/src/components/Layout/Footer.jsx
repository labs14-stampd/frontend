import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <span>© Stampd 2019</span>
    </FooterContainer>
  );
};
const FooterContainer = styled.div`
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  color: #333333;
  background: #f8f8f8;
  padding-bottom: 10px;
`;

export default Footer;

// ${props => props.theme.global.colors['neutral-3']}
// ${props => props.theme.global.colors['accent-3']}
