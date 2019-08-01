import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/browser';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import { StateProvider as GlobalProvider } from 'react-conflux';

import { Auth0Provider } from './components/auth/authWrapper';
import config from './components/auth/authConfig';
import './index.css';
import App from './App.jsx';

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

ReactDOM.render(
  <GlobalProvider reducer={globalReducer} stateContext={globalContext}>
    <Auth0Provider
      domain={config.domain}
      client_id={config.clientId}
      redirect_uri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      <Router>
        <AppWithRouter />
      </Router>
    </Auth0Provider>
  </GlobalProvider>,
  document.getElementById('root')
);
