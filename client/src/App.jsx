import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './auth/PrivateRoute.jsx';

import './App.css';

import { Layout } from './components/Layout';
import { Dashboard } from './components/dashboard';
import { Onboard, SchoolDetailsForm } from './components/dashboard/onboarding';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route exact path="/" /> {/* Placeholder route - to be used later */}
          <PrivateRoute path="/onboarding/school" render={SchoolDetailsForm} />
          <PrivateRoute path="/onboarding" render={Onboard} />
          <PrivateRoute path="/dashboard" render={Dashboard} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
