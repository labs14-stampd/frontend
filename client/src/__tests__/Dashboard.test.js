/* eslint-disable */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {
  renderWithRouterAndProviders,
  rendererWithRouterAndProviders
} from '../__testHelpers__';

import Dashboard from '../components/Dashboard/Dashboard';

describe('<Dashboard />', () => {
  describe('should render the component successfully without crashing', () => {
    it('tests that the component does not crash when it is rendered', () => {
      const helpers = renderWithRouterAndProviders(
        <Dashboard history={{ location: { pathname: '/' } }} />
      );
    });
  });

  describe('should match the previous snapshot of the component', () => {
    it('tests that the component has not changed and matched the previous snapshot', () => {
      const tree = rendererWithRouterAndProviders(
        <Dashboard history={{ location: { pathname: '/' } }} />
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });

  describe('should render the <SchooDashboard /> component successfully with roleId of 2', () => {
    it('tests that the correct dashboard is displayed with reducer test data', () => {
      const { getByText } = renderWithRouterAndProviders(
        <Dashboard history={{ location: { pathname: '/' } }} />
      );
      const schoolName = getByText(/testName/i);
      expect(schoolName).toBeDefined();
    });
  });

  describe('should pass down history to a child component successfully when the dashboard is rendered', () => {
    const mock = jest.fn();
    const { getByText } = renderWithRouterAndProviders(
      <Dashboard history={{ location: { pathname: '/' }, push: mock }} />
    );
    const newCredBtn = getByText(/Issue Credential/i);
    newCredBtn.click();
    newCredBtn.click();
    expect(mock).toHaveBeenCalledTimes(2);
  });
});
