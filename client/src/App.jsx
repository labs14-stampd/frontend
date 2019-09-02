import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PrivateRoute from './auth/PrivateRoute';
import { useAuth0 } from './auth/authWrapper';
import About from './components/About';
import Contact from './components/Contact';
import Loading from './components/Layout/Loading';
import Dashboard from './components/Dashboard/Dashboard';
import Onboard from './components/Dashboard/Onboard';
import SchoolDetailsForm from './components/Dashboard/Onboard/SchoolDetailsForm';
import StudentDetailsForm from './components/Dashboard/Onboard/StudentDetailsForm';
import Landing from './components/Landing';
import CredentialForm from './components/Dashboard/CredentialsForm';
import ErrorPage from './components/ErrorPage';
import Settings from './components/Settings';
import CredentialView from './components/CredentialView';
import GlobalStyle from './styles';

import Layout from './components/Layout';

function App(props) {
  const { loading } = useAuth0();
  return (
    <>
      {loading ? (
        <>
          <Loading />
          <GlobalStyle />
        </>
      ) : (
        <>
          <Layout {...props}>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route path="/view/:jwt" component={CredentialView} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <PrivateRoute exact path="/onboarding" component={Onboard} />
              <PrivateRoute
                path="/onboarding/school"
                component={SchoolDetailsForm}
              />
              <PrivateRoute
                path="/onboarding/student"
                component={StudentDetailsForm}
              />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute
                path="/dashboard/credForm"
                component={CredentialForm}
              />
              <PrivateRoute exact path="/settings" component={Settings} />

              {/* Error route */}
              <Route component={ErrorPage} />
            </Switch>
            <ToastContainer />
          </Layout>
          <GlobalStyle />
        </>
      )}
    </>
  );
}

export default App;
