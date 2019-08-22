/* eslint-disable */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {
  renderWithRouterAndProviders,
  rendererWithRouterAndProviders
} from '../__testHelpers__';

import Footer from '../components/Layout/Footer';

describe('<Footer />', () => {
  describe('should render the Footer component successfully without crashing', () => {
    it('tests that the component does not crash when it is rendered', () => {
      const helpers = renderWithRouterAndProviders(<Footer />);
    });
  });

  describe('should match the previous snapshot of the component', () => {
    it('tests that the component has not changed and matched the previous snapshot', () => {
      const tree = rendererWithRouterAndProviders(<Footer />);
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });

  describe('should render the copyright string successfully', () => {
    it('tests that the copyright string is rendered in the footer', () => {
      const { getByText } = renderWithRouterAndProviders(<Footer />);
      const copyright = getByText(/© Stampd 2019/i);
      expect(copyright).toBeDefined();
    });
  });
});
