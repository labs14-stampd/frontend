/* eslint-disable */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {
  renderWithRouterAndProviders,
  rendererWithRouterAndProviders
} from '../__testHelpers__';

import Landing from '../components/Landing/index';
import { mock } from '../auth/__mocks__/authWrapper';

describe('<Landing />', () => {
  describe('should render the component successfully without crashing', () => {
    it('tests that the component does not crash when it is rendered', () => {
      const helpers = renderWithRouterAndProviders(<Landing />);
    });
  });

  describe('should match the previous snapshot of the component', () => {
    it('tests that the component has not changed and matched the previous snapshot', () => {
      const tree = rendererWithRouterAndProviders(<Landing />);
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });

  describe('should render the marketing text to the screen successfully', () => {
    it('tests that the 1/3 string on the landing page is rendered successfully', () => {
      const { getByText } = renderWithRouterAndProviders(<Landing />);
      const string = getByText(/Easy. Verified. Blockchain./i);
      expect(string).toBeDefined();
    });

    it('tests that the 2/3 string on the landing page is rendered successfully', () => {
      const { getByText } = renderWithRouterAndProviders(<Landing />);
      const string = getByText(/Issue credentials with/i);
      expect(string).toBeDefined();
    });

    it('tests that the 3/3 string on the landing page is rendered successfully', () => {
      const { getByText } = renderWithRouterAndProviders(<Landing />);
      const string = getByText(/Stampd/i);
      expect(string).toBeDefined();
    });
  });

  describe('should render the landing page button to the screen successfully', () => {
    it('tests that the "Get Started" button is rendered successfully', () => {
      const { getByText } = renderWithRouterAndProviders(<Landing />);
      const getStartedBtn = getByText(/Get Started/i);
      expect(getStartedBtn).toBeDefined();
    });
  });
});
