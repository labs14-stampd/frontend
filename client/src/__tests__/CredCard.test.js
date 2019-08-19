/* eslint-disable */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {
  renderWithRouterAndProviders,
  rendererWithRouterAndProviders
} from '../__testHelpers__';

import CredCard from '../components/Dashboard/Card/CredCard';

describe('<CredCard />', () => {
  describe('should render the CredCard component successfully without crashing', () => {
    it('tests that the component does not crash when it is rendered', () => {
      const cred = {
        credName: 'test',
        credHash: 'string',
        criteria: 'testing',
        ownerName: 'Stampd',
        id: '5'
      };
      const helpers = renderWithRouterAndProviders(<CredCard cred={cred} />);
    });
  });

  describe('should match the previous snapshot of the component', () => {
    it('tests that the component has not changed and matched the previous snapshot', () => {
      const cred = {
        credName: 'test',
        credHash: 'string',
        criteria: 'testing',
        ownerName: 'Stampd',
        id: '5'
      };
      const tree = rendererWithRouterAndProviders(
        <CredCard cred={cred} history={{ location: { pathname: '/' } }} />
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });
});
