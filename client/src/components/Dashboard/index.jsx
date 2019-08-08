import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {} from 'grommet';

const Dashboard = ({ history }) => {
  return (
    <Container>
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
  padding: 70px 3% 0;
  margin: 0 auto;
  max-width: 1600px;
  min-height: 100vh;
  width: 100%;
  background: #f8f8f8;
`;

export default Dashboard;
