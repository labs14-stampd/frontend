import React from 'react';
import styled from 'styled-components';
import { useAuth0 } from '../../auth/authWrapper';
import { BaseButton } from '../../styles/themes';
import stampdBackground from '../../images/stampdbackground.svg';

function Landing() {
  const { loginWithRedirect } = useAuth0();
  return (
    <LandingPage>
      <div>
        <div className="landing-img">
          <img src={stampdBackground} alt="" draggable="false" />
        </div>
        <div className="cta-container">
          <div className="cta-text">
            <h1>
              Easy. Verified. Blockchain.
              <br />
              Issue credentials with
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
      </div>
    </LandingPage>
  );
}

const LandingPage = styled.main`
  width: 100%;
  padding: 0 3%;

  div {
    height: calc(100vh - 70px);
    width: 100%;
    position: relative;
    max-width: 1600px;
    margin: 0 auto;

    .landing-img {
      transform: translateX(-33%) translateY(-18%);
      position: absolute;
      left: 0;
      z-index: 1;
      overflow: hidden;
      min-width: 1300px;
      height: auto;

      @media (max-width: 1500px) {
        transform: translateX(-40%) translateY(-20%);
      }

      @media (max-width: 1200px) {
        transform: translateX(-48%) translateY(-20%);
      }

      @media (max-width: 1000px) {
        transform: translateX(-58%) translateY(-20%);
      }

      @media (max-width: 800px) {
        transform: translateX(-52%) scale(0.6) rotate(-36deg);
      }

      @media (max-width: 600px) {
        transform: translateX(-50%) scale(0.6) rotate(-40deg);
      }

      img {
        height: 120vh;
      }
    }

    .cta-container {
      display: flex;
      flex-direction: column;
      height: 45%;
      justify-content: flex-start;
      align-items: flex-end;

      .cta-text {
        text-align: right;
        margin: 24vh 0 10px;
        width: 58.5%;
        z-index: 2;

        @media (max-width: 1200px) {
          margin: 20vh 0 10px;
          width: 60%;
        }

        @media (max-width: 1000px) {
          margin: 23vh 0 10px;
          width: 72%;
        }

        @media (max-width: 800px) {
          margin: 15vh 0 10px;
          width: 90%;
        }

        @media (max-width: 800px) {
          margin: 15vh 0 10px;
          width: 100%;
        }

        @media (max-width: 600px) {
          width: 90%;
        }

        h1 {
          font-size: 5.3rem;
          font-weight: 800;

          @media (max-width: 1500px) {
            font-size: 4rem;
          }

          @media (max-width: 1000px) {
            font-size: 3.5rem;
          }

          @media (max-width: 600px) {
            font-size: 3rem;
          }

          span {
            color: ${props => props.theme.global.colors.brand};
          }
        }
      }
      button {
        transform: scale(1.8);
        margin: 50px 55px 0 0;
        z-index: 5;

        @media (max-width: 600px) {
          transform: scale(1.4);
          margin: 30px 5% 0 0;
        }
      }
    }
  }
`;

export default Landing;
