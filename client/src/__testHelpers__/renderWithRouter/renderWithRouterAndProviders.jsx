/* eslint-disable */
import React from 'react';
import { Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import {
  StateProvider as GlobalProvider,
  StateProvider as SchoolProvider
} from 'react-conflux';
import { Grommet } from 'grommet';
import {
  schoolReducer,
  schoolContext
} from '../../store/reducers/schoolReducer';
import {
  globalReducer,
  globalContext
} from '../../store/reducers/globalReducer';
import { theme } from '../../styles/themes';
jest.mock('../../store/reducers/globalReducer');
jest.mock('../../store/reducers/schoolReducer');

const renderWithRouterAndProviders = (
  ui,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] })
  } = {}
) => {
  return {
    ...render(
      <GlobalProvider reducer={globalReducer} stateContext={globalContext}>
        <SchoolProvider reducer={schoolReducer} stateContext={schoolContext}>
          <Grommet theme={theme}>
            <Router history={history}>{ui}</Router>
          </Grommet>
        </SchoolProvider>
      </GlobalProvider>
    ),
    history
  };
};

export default renderWithRouterAndProviders;
