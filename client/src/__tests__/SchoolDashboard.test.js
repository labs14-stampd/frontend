import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { StateProvider } from 'react-conflux';
import { Grommet } from 'grommet';
import { theme } from '../styles/themes';

import { renderWithRouter, rendererWithRouter } from '../testHelpers';
import Dashboard from '../components/Dashboard/SchoolDashboard';

describe('<Dashboard />', () => {
  describe('tests that <Dashboard /> renders without crashing', () => {
    it('should renders the SchoolDashboard component without crashing', () => {
      const helpers = renderWithRouter(
        <Grommet theme={theme}>
          <Dashboard history={{ location: { pathname: '/' } }} />
        </Grommet>
      );
    });
  });

  describe('tests <Dashboard /> matches previous snapshot', () => {
    it('matches the snapshot of App', () => {
      const tree = rendererWithRouter(
        <Grommet theme={theme}>
          <Dashboard history={{ location: { pathname: '/' } }} />
        </Grommet>
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });
});
