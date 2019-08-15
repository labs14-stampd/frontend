/* eslint-disable */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { Grommet } from 'grommet';
import { theme } from '../styles/themes';

import {
  renderWithRouterAndProviders,
  rendererWithRouterAndProviders
} from '../testHelpers';
import Dashboard from '../components/Dashboard/SchoolDashboard';

describe('<Dashboard />', () => {
  describe('tests that <Dashboard /> renders without crashing', () => {
    it('should renders the SchoolDashboard component without crashing', () => {
      const helpers = renderWithRouterAndProviders(
        <Grommet theme={theme}>
          <Dashboard history={{ location: { pathname: '/' } }} />
        </Grommet>
      );
    });
  });

  describe('tests <Dashboard /> matches previous snapshot', () => {
    it('matches the snapshot of Dashboard', () => {
      const tree = rendererWithRouterAndProviders(
        <Grommet theme={theme}>
          <Dashboard history={{ location: { pathname: '/' } }} />
        </Grommet>
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });
});
