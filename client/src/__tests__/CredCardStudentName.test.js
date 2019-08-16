/* eslint-disable */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {
  renderWithRouterAndProviders,
  rendererWithRouterAndProviders
} from '../testHelpers';

import CredCardStudentName from '../components/Dashboard/Card/CredCardStudentName';

describe('<CredCardStudentName />', () => {
  it('should render to the screen without crashing', () => {
    const helpers = renderWithRouterAndProviders(
      <CredCardStudentName ownerName="testing" />
    );
  });

  it('should match the previous snapshot of the component', () => {
    const tree = rendererWithRouterAndProviders(
      <CredCardStudentName ownerName="testing" />
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should render the owner name successfully', () => {
    const { getByText } = renderWithRouterAndProviders(
      <CredCardStudentName ownerName="testing" />
    );
    const ownerName = getByText(/testing/i);
    expect(ownerName).toBeDefined();
  });
});
