/* eslint-disable */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { Grommet } from 'grommet';
import { theme } from '../styles/themes';
import {
  renderWithRouterAndProviders,
  rendererWithRouterAndProviders
} from '../testHelpers';

import MainDashboard from '../components/Dashboard/SchoolDashboard/MainDashboard';

describe('<MainDashboard /> within school', () => {
  describe('tests that <MainDashboard /> within school renders without crashing', () => {
    it('should renders the <MainDashboard /> component without crashing', () => {
      const helpers = renderWithRouterAndProviders(
        <Grommet theme={theme}>
          <MainDashboard history={history} />
        </Grommet>
      );
    });
  });
  describe('tests <MainDashboard /> within school matches previous snapshot', () => {
    it('should matche the snapshot of Main Dashboard', () => {
      const tree = rendererWithRouterAndProviders(
        <Grommet theme={theme}>
          <MainDashboard history={history} />
        </Grommet>
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });
});
