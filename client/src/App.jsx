import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './auth/PrivateRoute.jsx';

import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import Onboard from './components/Dashboard/Onboard';
import SchoolDetailsForm from './components/Dashboard/Onboard/SchoolDetailsForm';
import CredentialsForm from './components/Dashboard/CredentialsForm';

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route exact path="/" /> {/* Placeholder route - to be used later */}
          <PrivateRoute
            path="/onboarding/school"
            component={SchoolDetailsForm}
          />
          <PrivateRoute path="/onboarding" component={Onboard} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/credentials" component={CredentialsForm} />
        </Switch>
      </Layout>
    </>
  );
}

export default App;
