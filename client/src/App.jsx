import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Grommet } from 'grommet';

import PrivateRoute from './auth/PrivateRoute';
import { theme } from './styles/themes';
import Dashboard from './components/Dashboard';
import Onboard from './components/Dashboard/Onboard';
import SchoolDetailsForm from './components/Dashboard/Onboard/SchoolDetailsForm';
import Landing from './components/Landing';
import CredentialForm from './components/Dashboard/CredentialsForm';
import NavBar from './components/Layout/NavBar';
import Footer from './components/Layout/Footer';
import GlobalStyle from './styles';

function App() {
  return (
    <>
      {/* Placeholder route - to be used later */}
      <Grommet theme={theme}>
        <Switch>
          <Route exact path="/" component={Landing} />
          <NavBar />
          <PrivateRoute
            exact
            path="/onboarding/school"
            component={SchoolDetailsForm}
          />
          <PrivateRoute exact path="/onboarding" component={Onboard} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute
            exact
            path="/dashboard/credForm"
            component={CredentialForm}
          />
          <Footer />
        </Switch>
        <GlobalStyle />
      </Grommet>
    </>
  );
}

export default App;
