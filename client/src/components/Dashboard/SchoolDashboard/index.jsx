import React from 'react';
import { StateProvider as SchoolProvider } from 'react-conflux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {} from 'grommet';

import MainDashboard from './MainDashboard';
import {
  schoolReducer,
  schoolContext
} from '../../../store/reducers/schoolReducer';

const Dashboard = ({ history }) => {
  return (
    <SchoolProvider reducer={schoolReducer} stateContext={schoolContext}>
      <Container>
        <MainDashboard history={history} />
      </Container>
    </SchoolProvider>
  );
};

Dashboard.propTypes = {
  history: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

const Container = styled.div`
  padding: 70px 3% 0;
  margin: 0 auto;
  min-height: 100vh;
  width: 100%;
  background: #f8f8f8;
`;

export default Dashboard;
