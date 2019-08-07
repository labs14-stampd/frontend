import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './auth/PrivateRoute';

import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import Onboard from './components/Dashboard/Onboard';
import SchoolDetailsForm from './components/Dashboard/Onboard/SchoolDetailsForm';
import Landing from './components/Landing';
import CredentialForm from './components/Dashboard/CredentialsForm';
import GlobalStyle from './styles';

function App() {
  return (
    <>
      <Layout>
        <Switch>
          {/* Placeholder route - to be used later */}
          <Route exact path="/" component={Landing} />
          <PrivateRoute
            path="/onboarding/school"
            component={SchoolDetailsForm}
          />
          <PrivateRoute path="/onboarding" component={Onboard} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/dashboard/credForm" component={CredentialForm} />
        </Switch>
      </Layout>
      <GlobalStyle />
    </>
  );
}

export default App;
