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
    it('tests that the component has not changed and matched the previous snapshot', () => {
      const tree = rendererWithRouterAndProviders(
        <StudentDetailsForm history={{ location: { pathname: '/' } }} />
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });

  describe('should render headers and labels to the screen successfully', () => {
    it('tests that the header text renders successfully', () => {
      const { getByText } = renderWithRouterAndProviders(
        <StudentDetailsForm history={{ location: { pathname: '/' } }} />
      );
      const header = getByText(/Student Register/i);
      expect(header).toBeDefined();
    });

    it('tests that the firstName label is rendered successfully', () => {
      const { getByText } = renderWithRouterAndProviders(
        <StudentDetailsForm history={{ location: { pathname: '/' } }} />
      );
      const firstName = getByText(/First Name/i);
      expect(firstName).toBeDefined();
    });

    it('tests that the middleName label is rendered successfully', () => {
      const { getByText } = renderWithRouterAndProviders(
        <StudentDetailsForm history={{ location: { pathname: '/' } }} />
      );
      const firstName = getByText(/Middle Name/i);
      expect(firstName).toBeDefined();
    });

    it('tests that the lastName label is rendered successfully', () => {
      const { getByText } = renderWithRouterAndProviders(
        <StudentDetailsForm history={{ location: { pathname: '/' } }} />
      );
      const firstName = getByText(/Last Name/i);
      expect(firstName).toBeDefined();
    });

    it('tests that the street1 label is rendered successfully', () => {
      const { getByText } = renderWithRouterAndProviders(
        <StudentDetailsForm history={{ location: { pathname: '/' } }} />
      );
      const firstName = getByText(/Address 1/i);
      expect(firstName).toBeDefined();
    });

    it('tests that the street2 label is rendered successfully', () => {
      const { getByText } = renderWithRouterAndProviders(
        <StudentDetailsForm history={{ location: { pathname: '/' } }} />
      );
      const firstName = getByText(/Address 2/i);
      expect(firstName).toBeDefined();
    });

    it('tests that the city label is rendered successfully', () => {
      const { getByText } = renderWithRouterAndProviders(
        <StudentDetailsForm history={{ location: { pathname: '/' } }} />
      );
      const firstName = getByText(/City/i);
      expect(firstName).toBeDefined();
    });

    it('tests that the zip label is rendered successfully', () => {
      const { getByText } = renderWithRouterAndProviders(
        <StudentDetailsForm history={{ location: { pathname: '/' } }} />
      );
      const firstName = getByText(/Zip Code/i);
      expect(firstName).toBeDefined();
    });

    it('tests that the phoneNumber label is rendered successfully', () => {
      const { getByText } = renderWithRouterAndProviders(
        <StudentDetailsForm history={{ location: { pathname: '/' } }} />
      );
      const firstName = getByText(/Phone Number/i);
      expect(firstName).toBeDefined();
    });
  });
});
