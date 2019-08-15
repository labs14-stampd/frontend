/* eslint-disable */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent } from '@testing-library/react';
import {
  renderWithRouterAndProviders,
  rendererWithRouterAndProviders
} from '../testHelpers';

import CredCardViewBtn from '../components/Dashboard/Card/CredCardViewBtn';

describe('<CredCardViewBtn />', () => {
  it('should render the component to the screen successfully without crashing', () => {
    const spy = jest.fn();
    const helpers = renderWithRouterAndProviders(
      <CredCardViewBtn getModal={spy} />
    );
  });

  it('should match the previous snapshot of the component', () => {
    const mock = jest.fn();
    const tree = rendererWithRouterAndProviders(
      <CredCardViewBtn getModal={mock} />
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should render the View string inside the button to the screen', () => {
    const mock = jest.fn();
    const { getByText } = renderWithRouterAndProviders(
      <CredCardViewBtn getModal={mock} />
    );
    expect(getByText(/View/i)).toBeDefined();
  });

  it('should fire the function when the button is clicked', () => {
    const mock = jest.fn();
    const { getByText } = renderWithRouterAndProviders(
      <CredCardViewBtn getModal={mock} />
    );
    const viewBtn = getByText(/View/i);
    fireEvent.click(viewBtn);
    expect(mock).toHaveBeenCalledTimes(1);
  });
});
