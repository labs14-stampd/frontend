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
  describe('should render the CredCard component successfully without crashing', () => {
    it('tests that the component does not crash when it is rendered', () => {
      const helpers = renderWithRouterAndProviders(
        <CredCardDateIssued date={'02/02/2020'} />
      );
    });
  });

  describe('should match the previous snapshot of the component', () => {
    it('tests that the component has not changed and matched the previous snapshot', () => {
      const tree = rendererWithRouterAndProviders(
        <CredCardDateIssued date={'03/03/3030'} />
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });

  describe('should successfully render a string to the screen', () => {
    it('tests that the date string is rendered successfully', () => {
      const { getByText } = renderWithRouterAndProviders(
        <CredCardDateIssued date={'testing'} />
      );
      expect(getByText(/testing/i)).toBeDefined();
    });
  });
});
