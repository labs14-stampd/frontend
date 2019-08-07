import React from 'react';
import styled from 'styled-components';

const Footer = props => {
  return (
    <FooterContainer>
      <span>stampd2019</span>
    </FooterContainer>
  );
};
const FooterContainer = styled.div`
  text-align: center;
  border-top: 1px solid #333;
  position: fixed;
  bottom: 0;
  width: 100%;
  color: white;
  background-color: #3aecfc;
  border-top: 2px solid #82fdff;
`;

export default Footer;

// ${props => props.theme.global.colors['neutral-3']}
//${props => props.theme.global.colors['accent-3']}
