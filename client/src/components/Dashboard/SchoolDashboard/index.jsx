import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {} from 'grommet';

import MainDashboard from './MainDashboard';

const Dashboard = ({ history }) => {
  return (
    <Container>
      <MainDashboard history={history} />
    </Container>
  );
};

Dashboard.propTypes = {
  history: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

const Container = styled.div`
  padding: 70px 3% 0;
  margin: 0 auto;
  min-height: calc(100vh - 70px);
  width: 100%;
  background: #f8f8f8;
`;

export default Dashboard;
