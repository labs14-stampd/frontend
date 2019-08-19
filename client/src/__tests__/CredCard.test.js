/* eslint-disable */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {
  renderWithRouterAndProviders,
  rendererWithRouterAndProviders
} from '../__testHelpers__';

import CredCard from '../components/Dashboard/Card/CredCard';

describe('<CredCard />', () => {
  it('should render the CredCard component without crashing', () => {
    const cred = {
      credName: 'test',
      credHash: 'string',
      criteria: 'testing',
      ownerName: 'Stampd',
      id: '5'
    };
    const helpers = renderWithRouterAndProviders(<CredCard cred={cred} />);
  });

  it('matches the snapshot of App', () => {
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
