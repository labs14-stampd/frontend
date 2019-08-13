import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { StateProvider } from 'react-conflux';
import { renderWithRouter, rendererWithRouter } from '../testHelpers';

import CredCard from '../components/Dashboard/Card/CredCard';
import { schoolReducer, schoolContext } from '../store/reducers/schoolReducer';

describe('<CredCard />', () => {
  it('should render the CredCard component without crashing', () => {
    const cred = {
      credName: 'test',
      criteria: 'testing',
      ownerName: 'Stampd',
      id: 5
    };
    const helpers = renderWithRouter(
      <StateProvider reducer={schoolReducer} stateContext={schoolContext}>
        <CredCard cred={cred} history={{ location: { pathname: '/' } }} />
      </StateProvider>
    );
  });

  it('matches the snapshot of App', () => {
    const cred = {
      credName: 'test',
      criteria: 'testing',
      ownerName: 'Stampd',
      id: 5
    };
    const tree = rendererWithRouter(
      <StateProvider reducer={schoolReducer} stateContext={schoolContext}>
        <CredCard cred={cred} history={{ location: { pathname: '/' } }} />
      </StateProvider>
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
