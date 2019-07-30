import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/browser';
import { Auth0Provider } from './Auth/auth0-wrapper';
import config from './Auth/auth-config';
import './index.css';
import App from './App';

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

ReactDOM.render(
  <Auth0Provider
    domain={config.domain}
    client_id={config.clientId}
    redirect_uri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
>
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);

