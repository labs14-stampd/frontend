import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useAuth0 } from '../../auth/authWrapper';

const Dashboard = ({ history }) => {
  const { getTokenWithPopup } = useAuth0();
  const callApi = async () => {
    try {
      await getTokenWithPopup({
        audience: `${process.env.REACT_APP_AUTH0_AUDIENCE}`,
        scope: 'openid profile email offline_access'
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Container>
      <h1>Dashboard</h1>
      <button type="button" onClick={callApi}>
        Check if working
      </button>
      <button type="button" onClick={() => history.push('/dashboard/credForm')}>
        Issue Credential
      </button>
    </Container>
  );
};

Dashboard.propTypes = {
  history: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export default Dashboard;
