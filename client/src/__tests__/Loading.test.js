/* eslint-disable */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {
  renderWithRouterAndProviders,
  rendererWithRouterAndProviders
} from '../__testHelpers__';

import Loading from '../components/Layout/Loading';

describe('<Loading />', () => {
  describe('should render the Loading component successfully without crashing', () => {
    it('tests that the component does not crash when it is rendered', () => {
      const helpers = renderWithRouterAndProviders(<Loading />);
    });
  });

  describe('should match the previous snapshot of the component', () => {
    it('tests that the component has not changed and matched the previous snapshot', () => {
      const tree = rendererWithRouterAndProviders(<Loading />);
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });

  describe('should render the Loader component to the screen successfully', () => {
    it('tests that the loader component is rendered successfully', () => {
      const { getByTestId } = renderWithRouterAndProviders(<Loading />);
      const loadingAnimation = getByTestId('loader');
      expect(loadingAnimation).toBeDefined();
    });
  });
});
