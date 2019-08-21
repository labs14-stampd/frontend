/* eslint-disable */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {
  renderWithRouterAndProviders,
  rendererWithRouterAndProviders
} from '../__testHelpers__';

import Onboard from '../components/Dashboard/Onboard';

describe('<Onboard />', () => {
  describe('should render the CredCard component successfully without crashing', () => {
    it('tests that the component does not crash when it is rendered', () => {
      const helpers = renderWithRouterAndProviders(
        <Onboard history={{ location: { pathname: '/' } }} />
      );
    });
  });

  describe('should match the previous snapshot of the component', () => {
    it('tests that the component has not changed and matched the previous snapshot', () => {
      const tree = rendererWithRouterAndProviders(
        <Onboard history={{ location: { pathname: '/' } }} />
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });

  describe('should render the required string to the screen successfully', () => {
    it('tests that form title is rendered successfully', () => {
      const { getByText } = renderWithRouterAndProviders(
        <Onboard history={{ location: { pathname: '/' } }} />
      );
      expect(getByText(/Choose Account Type/i)).toBeDefined();
    });
  });

  describe('should fire mock functions when the student and school buttons are clicked', () => {
    it('tests that the school button fires a function when it is clicked', () => {
      const mock = jest.fn();
      const { getByText } = renderWithRouterAndProviders(
        <Onboard history={{ location: { pathname: '/' }, push: mock }} />
      );
      const schoolBtn = getByText(/School/i);
      schoolBtn.click();
      expect(mock).toHaveBeenCalledTimes(1);
    });

    it('tests that the student butotn fires a function when it is clicked', () => {
      const mock = jest.fn();
      const { getByText } = renderWithRouterAndProviders(
        <Onboard history={{ location: { pathname: '/' }, push: mock }} />
      );
      const studentBtn = getByText(/Student/i);
      studentBtn.click();
      studentBtn.click();
      expect(mock).toHaveBeenCalledTimes(2);
    });
  });
});
