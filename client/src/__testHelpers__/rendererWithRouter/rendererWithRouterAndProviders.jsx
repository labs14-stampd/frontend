/* eslint-disable */
import React from 'react';
import { Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { createMemoryHistory } from 'history';
import { Grommet } from 'grommet';
import {
  StateProvider as GlobalProvider,
  StateProvider as SchoolProvider,
  StateProvider as StudentProvider
} from 'react-conflux';
import {
  schoolReducer,
  schoolContext
} from '../../store/reducers/schoolReducer';
import {
  globalReducer,
  globalContext
} from '../../store/reducers/globalReducer';
import {
  studentReducer,
  studentContext
} from '../../store/reducers/studentReducer';
import { theme } from '../../styles/themes';
jest.mock('../../store/reducers/globalReducer');
jest.mock('../../store/reducers/schoolReducer');
jest.mock('../../store/reducers/studentReducer');
jest.mock('../../auth/authWrapper');

const rendererWithRouterAndProviders = (
  ui,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] })
  } = {}
) => {
  return {
    ...renderer.create(
      <GlobalProvider reducer={globalReducer} stateContext={globalContext}>
        <SchoolProvider reducer={schoolReducer} stateContext={schoolContext}>
          <StudentProvider
            reducer={studentReducer}
            stateContext={studentContext}
          >
            <Grommet theme={theme}>
              <Router history={history}>{ui}</Router>
            </Grommet>
          </StudentProvider>
        </SchoolProvider>
      </GlobalProvider>
    ),
    history
  };
};

export default rendererWithRouterAndProviders;
