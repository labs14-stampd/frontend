/* eslint-disable */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {
  renderWithRouterAndProviders,
  rendererWithRouterAndProviders
} from '../testHelpers';

import CredCardSchoolName from '../components/Dashboard/Card/CredCardSchoolName';

describe('<CredCardSchoolName />', () => {
  it('should render the component without crashing', () => {
    const helpers = renderWithRouterAndProviders(
      <CredCardSchoolName credName="testName" criteria="testing" />
    );
  });

  it('should match the previous snapshot of the component', () => {
    const tree = rendererWithRouterAndProviders(
      <CredCardSchoolName credName="testName" criteria="testing" />
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should render a credential name string successfully to the screen', () => {
    const { getByText } = renderWithRouterAndProviders(
      <CredCardSchoolName credName="testName" criteria="testing" />
    );
    const credName = getByText(/testName/i);
    const criteria = getByText(/testing/i);
    expect(credName).toBeDefined();
  });

  it('should render the criteria string successfully to the screen', () => {
    const { getByText } = renderWithRouterAndProviders(
      <CredCardSchoolName credName="testName" criteria="testing" />
    );
    const criteria = getByText(/testing/i);
    expect(criteria).toBeDefined();
  });
});
