/* eslint-disable */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {
  renderWithRouterAndProviders,
  rendererWithRouterAndProviders
} from '../__testHelpers__';

import StudentDetailsForm from '../components/Dashboard/Onboard/StudentDetailsForm';

describe('<StudentDetailsForm />', () => {
  describe('should render the component successfully without crashing', () => {
    it('tests that the component does not crash when it is rendered', () => {
      const helpers = renderWithRouterAndProviders(
        <StudentDetailsForm history={{ location: { pathname: '/' } }} />
      );
    });
  });

  describe('should match the previous snapshot of the component', () => {
    const tree = rendererWithRouterAndProviders(
      <StudentDetailsForm history={{ location: { pathname: '/' } }} />
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  describe('should render headers and labels to the screen successfully', () => {
    it('tests that the header text renders successfully', () => {
      const { getByText } = renderWithRouterAndProviders(
        <StudentDetailsForm history={{ location: { pathname: '/' } }} />
      );
      const header = getByText(/Student Register/i);
      expect(header).toBeDefined();
    });
  });
});
