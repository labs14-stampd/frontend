/* eslint-disable */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { StateProvider } from 'react-conflux';
import { Grommet } from 'grommet';
import { theme } from '../styles/themes';
import { renderWithRouter, rendererWithRouter } from '../testHelpers';

import MainDashboard from '../components/Dashboard/SchoolDashboard/MainDashboard';
import { schoolReducer, schoolContext } from '../store/reducers/schoolReducer';

describe('<MainDashboard /> within school', () => {
  describe('tests that <MainDashboard /> within school renders without crashing', () => {
    it('should renders the <MainDashboard /> component without crashing', () => {
      const helpers = renderWithRouter(
        <StateProvider reducer={schoolReducer} stateContext={schoolContext}>
          <Grommet theme={theme}>
            <MainDashboard history={history} />
          </Grommet>
        </StateProvider>
      );
    });
  });
  describe('tests <MainDashboard /> within school matches previous snapshot', () => {
    it('should matche the snapshot of Main Dashboard', () => {
      const tree = rendererWithRouter(
      <StateProvider reducer={schoolReducer} stateContext={schoolContext}>
          <Grommet theme={theme}>
            <MainDashboard history={history} />
          </Grommet>
        </StateProvider>
      )
        expect(tree.toJSON()).toMatchSnapshot();
    })
  })
});
