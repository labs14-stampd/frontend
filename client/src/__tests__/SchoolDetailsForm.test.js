/* eslint-disable */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {
  renderWithRouterAndProviders,
  rendererWithRouterAndProviders
} from '../__testHelpers__';

import SchoolDetailsForm from '../components/Dashboard/Onboard/SchoolDetailsForm';

describe('<SchoolDetailsForm />', () => {
  describe('should render the component successfully without crashing', () => {
    it('tests that the component does not crash when it is rendered', () => {
      const helpers = renderWithRouterAndProviders(
        <SchoolDetailsForm history={{ location: { pathname: '/' } }} />
      );
    });
  });

  describe('should match the previous snapshot of the component', () => {
    it('tests that the component has not changed and matched the previous snapshot', () => {
      const tree = rendererWithRouterAndProviders(
        <SchoolDetailsForm history={{ location: { pathname: '/' } }} />
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });

  describe('should render headers and labels to the screen successfully', () => {
    it('tests that the header text renders correctly', () => {
      const { getByText } = renderWithRouterAndProviders(
        <SchoolDetailsForm history={{ location: { pathname: '/' } }} />
      );
      expect(getByText(/School Register/i)).toBeDefined();
    });

    it('tests the Institution label renders correctly', () => {
      const { getAllByText } = renderWithRouterAndProviders(
        <SchoolDetailsForm history={{ location: { pathname: '/' } }} />
      );
      expect(getAllByText(/Institution/i)).toBeDefined();
    });

    it('tests the Tax Id label renders correctly', () => {
      const { getByText } = renderWithRouterAndProviders(
        <SchoolDetailsForm history={{ location: { pathname: '/' } }} />
      );
      expect(getByText(/Tax Id/i)).toBeDefined();
    });

    it('tests the Address 1 label renders correctly', () => {
      const { getByText } = renderWithRouterAndProviders(
        <SchoolDetailsForm history={{ location: { pathname: '/' } }} />
      );
      expect(getByText(/Address 1/i)).toBeDefined();
    });

    it('tests the Address 2 label renders correctly', () => {
      const { getByText } = renderWithRouterAndProviders(
        <SchoolDetailsForm history={{ location: { pathname: '/' } }} />
      );
      expect(getByText(/Address 2/i)).toBeDefined();
    });

    it('tests the City label renders correctly', () => {
      const { getByText } = renderWithRouterAndProviders(
        <SchoolDetailsForm history={{ location: { pathname: '/' } }} />
      );
      expect(getByText(/City/i)).toBeDefined();
    });

    it('tests the State label renders correctly', () => {
      const { getByText } = renderWithRouterAndProviders(
        <SchoolDetailsForm history={{ location: { pathname: '/' } }} />
      );
      expect(getByText(/State/i)).toBeDefined();
    });

    it('tests the Zip label renders correctly', () => {
      const { getByText } = renderWithRouterAndProviders(
        <SchoolDetailsForm history={{ location: { pathname: '/' } }} />
      );
      expect(getByText(/Zip/i)).toBeDefined();
    });

    it('tests the Phone Number label renders correctly', () => {
      const { getByText } = renderWithRouterAndProviders(
        <SchoolDetailsForm history={{ location: { pathname: '/' } }} />
      );
      expect(getByText(/Phone Number/i)).toBeDefined();
    });

    it('tests the Type of Institution label renders correctly', () => {
      const { getByText } = renderWithRouterAndProviders(
        <SchoolDetailsForm history={{ location: { pathname: '/' } }} />
      );
      expect(getByText(/Type of Institution/i)).toBeDefined();
    });

    it('tests the Institution Website label renders correctly', () => {
      const { getByText } = renderWithRouterAndProviders(
        <SchoolDetailsForm history={{ location: { pathname: '/' } }} />
      );
      expect(getByText(/Institution Website/i)).toBeDefined();
    });
  });
});
