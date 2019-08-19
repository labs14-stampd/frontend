/* eslint-disable */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {
  renderWithRouterAndProviders,
  rendererWithRouterAndProviders
} from '../__testHelpers__';

import SchoolDetailsForm from '../components/Dashboard/Onboard/SchoolDetailsForm';

describe('<SchoolDetailsForm />', () => {
  it('should render the component successfully without crashing', () => {
    const helpers = renderWithRouterAndProviders(
      <SchoolDetailsForm history={{ location: { pathname: '/' } }} />
    );
  });
});
