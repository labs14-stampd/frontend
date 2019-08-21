/* eslint-disable */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {
  renderWithRouterAndProviders,
  rendererWithRouterAndProviders
} from '../__testHelpers__';

import CredentialsForm from '../components/Dashboard/CredentialsForm';

describe('<CredentialsForm />', () => {
  describe('should render the CredCard component successfully without crashing', () => {
    it('tests that the component does not crash when it is rendered', () => {
      const helpers = renderWithRouterAndProviders(
        <CredentialsForm history={{ location: { pathname: '/' } }} />
      );
    });
  });

  describe('should match the previous snapshot of the component', () => {
    it('tests that the component has not changed and matched the previous snapshot', () => {
      const tree = rendererWithRouterAndProviders(
        <CredentialsForm history={{ location: { pathname: '/' } }} />
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });
});
