import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BaseButton } from '../../../styles/themes';

function Onboard({ history }) {
  return (
    <>
      <Container>
        <div>
          <h2>Choose Account Type</h2>
          <BaseButton
            type="button"
            onClick={() => history.push('/onboarding/school')}
            label="School"
          />
          <BaseButton
            type="button"
            onClick={() => history.push('/onboarding/student')}
            label="Student"
            disabled
          />
        </div>
      </Container>
    </>
  );
}

Onboard.propTypes = {
  history: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  padding: 120px 3% 0;

  div {
    background: ${props => props.theme.global.colors.dashBoardBg};
    border: 1px solid ${props => props.theme.global.colors.dashBoardBorder};
    border-radius: 2px;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    padding: 3%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      width: 100%;
      text-align: center;
      margin-bottom: 37px;
    }

    button {
      margin-bottom: 25px;
      width: 57%;
      padding: 10px;
      border-radius: 50px;
      :hover {
        background: ${props => props.theme.global.colors.brand};
        color: ${props => props.theme.global.colors['accent-4']};
      }
    }

    button:last-of-type {
      border: 2px solid grey;
      color: grey;
      :hover {
        background: white;
        border: 2px solid grey;
        color: grey;
      }
    }
  }
`;

export default Onboard;
