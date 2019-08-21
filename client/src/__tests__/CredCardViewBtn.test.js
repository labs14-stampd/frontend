/* eslint-disable */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent } from '@testing-library/react';
import {
  renderWithRouterAndProviders,
  rendererWithRouterAndProviders
} from '../__testHelpers__';

import CredCardViewBtn from '../components/Dashboard/Card/CredCardViewBtn';

describe('<CredCardViewBtn />', () => {
  describe('should render the CredCard component successfully without crashing', () => {
    it('tests that the component does not crash when it is rendered', () => {
      const spy = jest.fn();
      const helpers = renderWithRouterAndProviders(
        <CredCardViewBtn getModal={spy} />
      );
    });
  });

  describe('should match the previous snapshot of the component', () => {
    it('tests that the component has not changed and matched the previous snapshot', () => {
      const mock = jest.fn();
      const tree = rendererWithRouterAndProviders(
        <CredCardViewBtn getModal={mock} />
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });

  describe('should render the required string successfully', () => {
    it('tests that the View string inside the button to the screen', () => {
      const mock = jest.fn();
      const { getByText } = renderWithRouterAndProviders(
        <CredCardViewBtn getModal={mock} />
      );
      expect(getByText(/View/i)).toBeDefined();
    });
  });

  describe('should fire the function when the button is clicked', () => {
    it('tests that a function is fired when the button is clicked', () => {
      const mock = jest.fn();
      const { getByText } = renderWithRouterAndProviders(
        <CredCardViewBtn getModal={mock} />
      );
      const viewBtn = getByText(/View/i);
      fireEvent.click(viewBtn);
      expect(mock).toHaveBeenCalledTimes(1);
    });
  });
});
