/* eslint-disable */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent } from '@testing-library/react';
import {
  renderWithRouterAndProviders,
  rendererWithRouterAndProviders
} from '../__testHelpers__';

import CredCardDateIssued from '../components/Dashboard/Card/CredCardDateIssued';

describe('<CredCardDateIssued />', () => {
  it('should render the component to the screen without crashing', () => {
    const helpers = renderWithRouterAndProviders(
      <CredCardDateIssued date={'02/02/2020'} />
    );
  });

  it('should match the previous snapshot of the component', () => {
    const tree = rendererWithRouterAndProviders(
      <CredCardDateIssued date={'03/03/3030'} />
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should successfully render a string to the screen', () => {
    const { getByText } = renderWithRouterAndProviders(
      <CredCardDateIssued date={'testing'} />
    );
    expect(getByText(/testing/i)).toBeDefined();
  });
});
