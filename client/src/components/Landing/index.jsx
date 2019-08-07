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
          Lorem Epsom in the
          <br />
          blockchain with
          <span>Stampd</span>
        </div>
        <BaseButton
          type="button"
          onClick={() => loginWithRedirect({})}
          label="Get Started"
          primary
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
    margin-right: 10%;
    .cta-text {
      font-size: 2.8rem;
      margin-bottom: 10px;
      span {
        color: ${props => console.log(props)};
      }
    }
  }
`;

export default Landing;
