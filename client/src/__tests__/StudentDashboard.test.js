/* eslint-disable */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {
  renderWithRouterAndProviders,
  rendererWithRouterAndProviders
} from '../__testHelpers__';

import StudentDashboard from '../components/Dashboard/Dashboard/StudentDashboard';

describe('<StudentDashboard />', () => {
  describe('should render the component successfully without crashing', () => {
    it('tests that the component does not crash when it is rendered', () => {
      const helpers = renderWithRouterAndProviders(
        <StudentDashboard history={{ location: { pathname: '/' } }} />
      );
    });
  });

  describe('should match the previous snapshot of the component', () => {
    it('tests that the component has not changed and matched the previous snapshot', () => {
      const tree = rendererWithRouterAndProviders(
        <StudentDashboard history={{ location: { pathname: '/' } }} />
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });

  describe('should render the credentials for each school to the screen', () => {
    it("tests that the component renders the school's name above the credentials", () => {
      const { getByText } = renderWithRouterAndProviders(
        <StudentDashboard history={{ location: { pathname: '/' } }} />
      );
      const cred1 = getByText(/test1/i);
      const cred2 = getByText(/test2/i);
      const cred3 = getByText(/test3/i);
      expect(cred1).toBeDefined();
      expect(cred2).toBeDefined();
      expect(cred3).toBeDefined();
    });
  });

  describe("should render all credentials' view buttons to the screen", () => {
    it('tests that all credentials have their associated View buttons', () => {
      const { getAllByText } = renderWithRouterAndProviders(
        <StudentDashboard history={{ location: { pathname: '/' } }} />
      );
      const viewBtns = getAllByText(/View/i);
      expect(viewBtns).toHaveLength(3);
    });
  });
});
