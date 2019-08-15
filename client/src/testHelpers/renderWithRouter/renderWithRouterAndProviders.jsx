import React from 'react';
import { Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import {
  StateProvider as GlobalProvider,
  StateProvider as SchoolProvider
} from 'react-conflux';
import {
  schoolReducer,
  schoolContext
} from '../../store/reducers/schoolReducer';
import {
  globalReducer,
  globalContext
} from '../../store/reducers/globalReducer';

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
          <Router history={history}>{ui}</Router>
        </SchoolProvider>
      </GlobalProvider>
    ),
    history
  };
};

export default renderWithRouterAndProviders;
