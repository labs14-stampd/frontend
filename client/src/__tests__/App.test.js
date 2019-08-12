import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { renderWithRouter, rendererWithRouter } from '../testHelpers';

import App from '../App';

describe('<App />', () => {
  it('should render the App component without crashing', () => {
    const helpers = renderWithRouter(
      <App history={{ location: { pathname: '/' } }} />
    );
  });

  it('matches the snapshot of App', () => {
    const tree = rendererWithRouter(
      <App history={{ location: { pathname: '/' } }} />
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
