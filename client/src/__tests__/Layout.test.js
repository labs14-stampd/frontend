/* eslint-disable */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {
  renderWithRouterAndProviders,
  rendererWithRouterAndProviders
} from '../__testHelpers__';

import Layout from '../components/Layout';

describe('<Layout />', () => {
  describe('should render the Layout component successfully without crashing', () => {
    it('tests that the component does not crash when it is rendered', () => {
      const helpers = renderWithRouterAndProviders(
        <Layout history={{ location: { pathname: '/' } }}>
          <p>Test</p>
        </Layout>
      );
    });
  });

  describe('should match the previous snapshot of the component', () => {
    it('tests that the component has not changed and matched the previous snapshot', () => {
      const tree = rendererWithRouterAndProviders(
        <Layout history={{ location: { pathname: '/' } }}>
          <p>Test</p>
        </Layout>
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });

  describe('should render the navbar to the screen successfully', () => {
    it('tests that the navbar has been rendered successfully', () => {
      const { getByLabelText } = renderWithRouterAndProviders(
        <Layout history={{ location: { pathname: '/' } }}>
          <p>Test</p>
        </Layout>
      );
      const loginBtn = getByLabelText(/login/i);
      expect(loginBtn).toBeDefined();
    });
  });

  describe('should render the footer to the screen successfully', () => {
    it('tests that the footer has been rendered successfully', () => {
      const { getByText } = renderWithRouterAndProviders(
        <Layout history={{ location: { pathname: '/' } }}>
          <p>Test</p>
        </Layout>
      );
      const copyright = getByText(/© Stampd 2019/i);
      expect(copyright).toBeDefined();
    });
  });
});
