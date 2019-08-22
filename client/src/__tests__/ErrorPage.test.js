/* eslint-disable */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {
  renderWithRouterAndProviders,
  rendererWithRouterAndProviders
} from '../__testHelpers__';

import ErrorPage from '../components/ErrorPage';

describe('<ErrorPage />', () => {
  describe('should render the component successfully without crashing', () => {
    it('tests that the component does not crash when it is rendered', () => {
      const helpers = renderWithRouterAndProviders(<ErrorPage />);
    });
  });

  describe('should match the previous snapshot of the component', () => {
    it('tests that the component has not changed and matched the previous snapshot', () => {
      const tree = rendererWithRouterAndProviders(<ErrorPage />);
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });

  describe('should render the title of the error page successfully to the screen', () => {
    it('tests that the title of the error page renders successfully', () => {
      const { getByText } = renderWithRouterAndProviders(<ErrorPage />);
      const title = getByText(/Code 404/i);
      expect(title).toBeDefined();
    });
  });

  describe('should render the error message to the screen successfully', () => {
    const { getByText } = renderWithRouterAndProviders(<ErrorPage />);
    const msg = getByText(
      /Oops, this is not the page you are looking for..../i
    );
    expect(msg).toBeDefined();
  });
});
