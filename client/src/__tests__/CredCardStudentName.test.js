/* eslint-disable */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {
  renderWithRouterAndProviders,
  rendererWithRouterAndProviders
} from '../__testHelpers__';

import CredCardStudentName from '../components/Dashboard/Card/CredCardStudentName';

describe('<CredCardStudentName />', () => {
  describe('should render the CredCard component successfully without crashing', () => {
    it('tests that the component does not crash when it is rendered', () => {
      const helpers = renderWithRouterAndProviders(
        <CredCardStudentName ownerName="testing" />
      );
    });
  });

  describe('should match the previous snapshot of the component', () => {
    it('tests that the component has not changed and matched the previous snapshot', () => {
      const tree = rendererWithRouterAndProviders(
        <CredCardStudentName ownerName="testing" />
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });

  describe('should render the owner name successfully', () => {
    it('tests that the owner name is rendered successfully', () => {
      const { getByText } = renderWithRouterAndProviders(
        <CredCardStudentName ownerName="testing" />
      );
      const ownerName = getByText(/testing/i);
      expect(ownerName).toBeDefined();
    });
  });
});
