/* eslint-disable */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {
  renderWithRouterAndProviders,
  rendererWithRouterAndProviders
} from '../testHelpers';

import Onboard from '../components/Dashboard/Onboard';

describe('<Onboard />', () => {
  it('should render the component without crashing', () => {
    const helpers = renderWithRouterAndProviders(
      <Onboard history={{ location: { pathname: '/' } }} />
    );
  });

  it('should match the previous snapshot of the component', () => {
    const tree = rendererWithRouterAndProviders(
      <Onboard history={{ location: { pathname: '/' } }} />
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should display the form title to the screen successfully', () => {
    const { getByText } = renderWithRouterAndProviders(
      <Onboard history={{ location: { pathname: '/' } }} />
    );
    expect(getByText(/Choose Account Type/i)).toBeDefined();
  });

  it('should work when the school button is clicked', () => {
    const mock = jest.fn();
    const { getByText } = renderWithRouterAndProviders(
      <Onboard history={{ location: { pathname: '/' }, push: mock }} />
    );
    const schoolBtn = getByText(/School/i);
    schoolBtn.click();
    expect(mock).toHaveBeenCalledTimes(1);
  });

  it('should work when the student button is clicked', () => {
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
