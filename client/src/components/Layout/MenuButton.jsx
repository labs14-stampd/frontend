import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const MenuButton = ({ setShown, isShown }) => {
  const [isOpen, setIsOpen] = useState(false);
  const setMenu = e => {
    e.preventDefault();
    setIsOpen(!isOpen);
    setShown(!isShown);
  };
  return (
    <Styles>
      <div
        className={
          isOpen
            ? 'hamburger-menu menu-open clickHamburgerMenu'
            : 'hamburger-menu'
        }
        onClick={e => setMenu(e)}
      >
        <span />
        <span />
        <span />
      </div>
    </Styles>
  );
};

MenuButton.propTypes = {
  setShown: PropTypes.func.isRequired,
  isShown: PropTypes.bool.isRequired
};

const Styles = styled.div`
  cursor: pointer;
  margin-right: 13px;

  .hamburger-menu {
    width: 33px;
    height: 33px;
    margin-right: 10px;
    position: relative;
    display: inline-block;

    span {
      background-color: white;
      position: absolute;
      border-radius: 2px;
      transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
      width: 40px;
      height: 5px;
      transition-duration: 0.4s;
    }
    span:nth-child(1) {
      top: 0px;
      left: 0px;
    }
    span:nth-child(2) {
      top: 14px;
      left: 0px;
    }
    span:nth-child(3) {
      bottom: 0px;
      left: 0px;
    }
  }
  .menu-open {
    z-index: 3;
  }
  .clickHamburgerMenu span:nth-child(1) {
    transform: rotate(45deg);
    top: 14px;
    width: 43px;
  }
  .clickHamburgerMenu span:nth-child(2) {
    transform: scale(0);
  }
  .clickHamburgerMenu span:nth-child(3) {
    transform: rotate(-45deg);
    top: 14px;
    width: 43px;
  }
`;

export default MenuButton;
