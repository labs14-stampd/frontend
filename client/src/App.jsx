import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Grommet } from 'grommet';

import PrivateRoute from './auth/PrivateRoute';
import { useAuth0 } from './auth/authWrapper';
import { theme } from './styles/themes';
import Loading from './components/Layout/Loading';
import Dashboard from './components/Dashboard/SchoolDashboard';
import Onboard from './components/Dashboard/Onboard';
import SchoolDetailsForm from './components/Dashboard/Onboard/SchoolDetailsForm';
import Landing from './components/Landing';
import CredentialForm from './components/Dashboard/CredentialsForm';
import ErrorPage from './components/ErrorPage';
import GlobalStyle from './styles';

import Layout from './components/Layout';

function App() {
  const { loading } = useAuth0();
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Grommet theme={theme}>
          <Layout>
            <Switch>
              <Route exact path="/" component={Landing} />
              <PrivateRoute
                path="/onboarding/school"
                component={SchoolDetailsForm}
              />
              <PrivateRoute exact path="/onboarding" component={Onboard} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute
                path="/dashboard/credForm"
                component={CredentialForm}
              />
              {/* Error route */}
              <Route component={ErrorPage} />
            </Switch>
          </Layout>
          <GlobalStyle />
        </Grommet>
      )}
    </>
  );
}

export default App;
