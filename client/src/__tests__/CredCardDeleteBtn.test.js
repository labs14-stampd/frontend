/* eslint-disable */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {
  renderWithRouterAndProviders,
  rendererWithRouterAndProviders
} from '../__testHelpers__';

import CredCardDeleteBtn from '../components/Dashboard/Card/CredCardDeleteBtn';

describe('<CredCardDeleteBtn />', () => {
  describe('should render the CredCard component successfully without crashing', () => {
    it('should successfully render the component without crashing', () => {
      const helpers = renderWithRouterAndProviders(
        <CredCardDeleteBtn credId="1" credHash="testing" />
      );
    });
  });

  describe('should match the previous snapshot of the component', () => {
    it('tests that the component has not changed and matched the previous snapshot', () => {
      const tree = rendererWithRouterAndProviders(
        <CredCardDeleteBtn credId="5" credHash="testing" />
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });
});
