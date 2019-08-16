/* eslint-disable */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { Grommet } from 'grommet';
import { theme } from '../styles/themes';

import {
  renderWithRouterAndProviders,
  rendererWithRouterAndProviders
} from '../testHelpers';

import CredentialsForm from '../components/Dashboard/CredentialsForm';

describe('<CredentialsForm />', () => {
  it('should display the component without crashing', () => {
    const helpers = renderWithRouterAndProviders(
      <Grommet theme={theme}>
        <CredentialsForm history={{ location: { pathname: '/' } }} />
      </Grommet>
    );
  });
});
