import React from 'react';
import styled from 'styled-components';
import { useAuth0 } from '../../auth/authWrapper';
import PropTypes from 'prop-types';
import { BaseButton } from '../../styles/themes';

function Landing({ history }) {
  const { loginWithRedirect } = useAuth0();
  return (
    <LandingPage>
      <BaseButton
        type="button"
        onClick={() => loginWithRedirect({})}
        label="Get Started"
      />
    </LandingPage>
  );
}

const LandingPage = styled.div`
  background-color: #3aecfc;
  min-height: 91vh;
`;

Landing.propTypes = {
  history: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default Landing;
