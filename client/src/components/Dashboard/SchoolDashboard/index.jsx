import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {} from 'grommet';

import queries from './queries';

const Dashboard = ({ history }) => {
  useEffect(() => {
    async function getUserData() {
      try {
        const id = localStorage.id;
        const data = await queries.getUserById({
          id
        });
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    }
    getUserData();
  }, []);
  return (
    <Container>
      <div>
        <h2>School Name Here</h2>
        <button
          type="button"
          onClick={() => history.push('/dashboard/credForm')}
        >
          Issue Credential
        </button>
      </div>
    </Container>
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

  div:first-of-type {
    margin: 50px auto 0;
    max-width: 1600px;
    width: 100%;
    background: white;
    min-height: calc(100vh - 170px);
    border: 1px solid #d8d8d8;
    border-radius: 2px;
  }
`;

export default Dashboard;
