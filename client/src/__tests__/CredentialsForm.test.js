/* eslint-disable */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import {
  renderWithRouterAndProviders,
  rendererWithRouterAndProviders
} from '../testHelpers';

import CredentialsForm from '../components/Dashboard/CredentialsForm';

describe('<CredentialsForm />', () => {
  it('should display the component without crashing', () => {
    const helpers = renderWithRouterAndProviders(
      <CredentialsForm history={{ location: { pathname: '/' } }} />
    );
  });

  it('should match the previous snapshot of the component', () => {
    const tree = rendererWithRouterAndProviders(
      <CredentialsForm history={{ location: { pathname: '/' } }} />
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
