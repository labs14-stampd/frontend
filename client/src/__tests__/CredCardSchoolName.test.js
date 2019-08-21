/* eslint-disable */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {
  renderWithRouterAndProviders,
  rendererWithRouterAndProviders
} from '../__testHelpers__';

import CredCardSchoolName from '../components/Dashboard/Card/CredCardSchoolName';

describe('<CredCardSchoolName />', () => {
  describe('', () => {
    it('tests that the component does not crash when it is rendered', () => {
      const helpers = renderWithRouterAndProviders(
        <CredCardSchoolName credName="testName" criteria="testing" />
      );
    });
  });

  describe('should match the previous snapshot of the component', () => {
    it('tests that the component has not changed and matched the previous snapshot', () => {
      const tree = rendererWithRouterAndProviders(
        <CredCardSchoolName credName="testName" criteria="testing" />
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });

  describe('should render a the required strings successfully to the screen', () => {
    it('tests that the credential name string is rendered successfully', () => {
      const { getByText } = renderWithRouterAndProviders(
        <CredCardSchoolName credName="testName" criteria="testing" />
      );
      const credName = getByText(/testName/i);
      const criteria = getByText(/testing/i);
      expect(credName).toBeDefined();
    });

    it('tests that the criteria string is rendered successfully', () => {
      const { getByText } = renderWithRouterAndProviders(
        <CredCardSchoolName credName="testName" criteria="testing" />
      );
      const criteria = getByText(/testing/i);
      expect(criteria).toBeDefined();
    });
  });
});
