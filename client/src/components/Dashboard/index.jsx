import React from 'react';
import { useAuth0 } from '../../auth/authWrapper';

const Dashboard = ({ history }) => {
  const { getTokenWithPopup } = useAuth0();
  const callApi = async () => {
    try {
      const token = await getTokenWithPopup({
        audience: `${process.env.REACT_APP_AUTH0_AUDIENCE}`,
        scope: 'openid profile email offline_access'
      });
      console.log(token);
    } catch (error) {
      console.error(error);
    }
  };
  const routeCredential = e => {
    e.preventDefault();
    history.push('/credentials');
  };
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={callApi}>Check if working</button>
      <button onClick={routeCredential}>Submit New Credential</button>
    </div>
  );
};

export default Dashboard;
