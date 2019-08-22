/* eslint-disable */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {
  renderWithRouterAndProviders,
  rendererWithRouterAndProviders
} from '../__testHelpers__';

import NavBar from '../components/Layout/NavBar';

describe('<NavBar />', () => {
  describe('should render the component successfully without crashing', () => {
    it('tests that the component does not crash when it is rendered', () => {
      const helpers = renderWithRouterAndProviders(
        <NavBar history={{ location: { pathname: '/' } }} />
      );
    });
  });

  describe('should match the previous snapshot of the component', () => {
    it('tests that the component has not changed and matched the previous snapshot', () => {
      const tree = rendererWithRouterAndProviders(
        <NavBar history={{ location: { pathname: '/' } }} />
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });

  describe('should not render the navbar hamburger when a user is not signed in', () => {
    it('tests that the hamburger is not rendered when no user is signed in', () => {
      const { getByTestId } = renderWithRouterAndProviders(
        <NavBar history={{ location: { pathname: '/' } }} />
      );
      expect(getByTestId('hamburger')).toBeDefined();
    });
  });

  describe('should render the login button string to the screen successfully', () => {
    it('tests that the login button string is rendered successfully', () => {
      const { getByText } = renderWithRouterAndProviders(
        <NavBar history={{ location: { pathname: '/' } }} />
      );
      const loginBtn = getByText(/logout/i);
      expect(loginBtn).toBeDefined();
    });
  });
});
