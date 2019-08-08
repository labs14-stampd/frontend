import React from 'react';
import styled from 'styled-components';
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
            Secure your credentials
            <br />
            on blockchain with
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
  position: relative;
  max-width: 1600px;
  margin: 0 auto;

  .landing-img {
    transform: translateX(-38%) translateY(-18%);
    position: absolute;
    left: 0;
    z-index: 1;
    overflow: hidden;
    min-width: 1300px;

    img {
      height: 120vh;
    }
  }

  .cta-container {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    margin: 0 3%;

    .cta-text {
      text-align: right;
      margin: 24vh 0 10px;
      width: 58.5%;
      z-index: 2;

      h1 {
        font-size: 5.3rem;
        font-weight: 800;
        color: #333333;

        span {
          color: ${props => props.theme.global.colors.brand};
        }
      }
    }
    button {
      transform: scale(1.8);
      margin: 50px 55px 0 0;
      z-index: 5;
    }
  }
`;

export default Landing;
