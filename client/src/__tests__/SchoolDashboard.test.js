/* eslint-disable */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {
  renderWithRouterAndProviders,
  rendererWithRouterAndProviders
} from '../__testHelpers__';

import SchoolDashboard from '../components/Dashboard/Dashboard/SchoolDashboard';

describe('<SchoolDetailsForm />', () => {
  describe('should render the component successfully without crashing', () => {
    it('tests that the component does not crash when it is rendered', () => {
      const helpers = renderWithRouterAndProviders(
        <SchoolDashboard history={{ location: { pathname: '/' } }} />
      );
    });
  });

  describe('should match the previous snapshot of the component', () => {
    it('tests that the component has not changed and matched the previous snapshot', () => {
      const tree = rendererWithRouterAndProviders(
        <SchoolDashboard history={{ location: { pathname: '/' } }} />
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });

  describe('should render credentials for the student to the screen', () => {
    it('tests that the component renders the credntials list successfully', () => {
      const { getByText } = renderWithRouterAndProviders(
        <SchoolDashboard history={{ location: { pathname: '/' } }} />
      );
      const cred1 = getByText(/test1/i);
      const cred2 = getByText(/test2/i);
      const cred3 = getByText(/test3/i);
      expect(cred1).toBeDefined();
      expect(cred2).toBeDefined();
      expect(cred3).toBeDefined();
    });
  });

  describe('should render the name of the student user to the dashboard successfully', () => {
    it("tests that the component renders the student's name above the credentials", () => {
      const { getByText } = renderWithRouterAndProviders(
        <SchoolDashboard history={{ location: { pathname: '/' } }} />
      );
      const dashboardName = getByText(/testName/i);
      expect(dashboardName).toBeDefined();
    });
  });

  describe('should fire a mock function when the issue credential button is clicked', () => {
    it('tests that the issue credential button works', () => {
      const mock = jest.fn();
      const { getByText } = renderWithRouterAndProviders(
        <SchoolDashboard
          history={{ location: { pathname: '/' }, push: mock }}
        />
      );
      const newCredBtn = getByText(/Issue Credential/i);
      newCredBtn.click();
      newCredBtn.click();
      expect(mock).toHaveBeenCalledTimes(2);
    });
  });

  describe('should render the search bar to the screen successfully', () => {
    it('tests that the search bar is rendered successfully', () => {
      const { getByPlaceholderText } = renderWithRouterAndProviders(
        <SchoolDashboard history={{ location: { pathname: '/' } }} />
      );
      const searchBar = getByPlaceholderText(/Search/i);
      expect(searchBar).toBeDefined();
    });
  });
});
