import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useAuth0 } from '../../auth/authWrapper';
import { BaseButton } from '../../styles/themes';
import stampdBackground from '../../images/stampdbackground.svg';

function Landing() {
  const { loginWithRedirect } = useAuth0();
  return (
    <LandingPage>
      <div className="landing-img">
        <img src={stampdBackground} alt="" draggable="false" />
      </div>
      <div className="cta-container">
        <div className="cta-text">
          <h1>
            Lorem Epsom in the
            <br />
            blockchain with
            <span> Stampd</span>
          </h1>
        </div>
        <BaseButton
          type="button"
          onClick={() => loginWithRedirect({})}
          label="Get Started"
          primary
          size="xlarge"
        />
      </div>
    </LandingPage>
  );
}

const LandingPage = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  position: relative;

  .landing-img {
    transform: translateX(-35%) translateY(-18%) scale(0.8);
    position: absolute;
    left: 0;
    z-index: -1;
    overflow: hidden;
  }

  .cta-container {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    margin-right: 11%;
    .cta-text {
      text-align: right;
      margin-bottom: 10px;
     h1 {
      font-size: 5.3rem;
      font-weight: 800;
      span {
        color: ${props => props.theme.global.colors.brand};
      }
     }
    }
    button {
      transform: scale(1.8);
      margin-top: 50px;
    }
  }
`;

export default Landing;
