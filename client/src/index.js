import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/browser';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import {
  StateProvider as GlobalProvider,
  StateProvider as SchoolProvider,
  StateProvider as StudentProvider
} from 'react-conflux';
import { schoolReducer, schoolContext } from './store/reducers/schoolReducer';
import {
  studentReducer,
  studentContext
} from './store/reducers/studentReducer';

import { Auth0Provider } from './auth/authWrapper';
import config from './auth/authConfig';
import App from './App';

import globalReducer, { globalContext } from './store/reducers/globalReducer';

Sentry.init({ dsn: `https://${process.env.REACT_APP_SENTRY}` });

const onRedirectCallback = appState => {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

const AppWithRouter = withRouter(App);
const Auth0ProviderWithRouter = withRouter(Auth0Provider);

ReactDOM.render(
  <GlobalProvider reducer={globalReducer} stateContext={globalContext}>
    <SchoolProvider reducer={schoolReducer} stateContext={schoolContext}>
      <StudentProvider reducer={studentReducer} stateContext={studentContext}>
        <Router>
          <Auth0ProviderWithRouter
            domain={config.domain}
            client_id={config.clientId}
            redirect_uri={window.location.origin}
            onRedirectCallback={onRedirectCallback}
          >
            <AppWithRouter />
          </Auth0ProviderWithRouter>
        </Router>
      </StudentProvider>
    </SchoolProvider>
  </GlobalProvider>,
  document.getElementById('root')
);
