/* eslint-disable */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {
  renderWithRouterAndProviders,
  rendererWithRouterAndProviders
} from '../__testHelpers__';

import MenuLayer from '../components/Layout/MenuLayer';

describe('<MenuLayer />', () => {
  describe('should render the MenuLayer component successfully without crashing', () => {
    it('tests that the component does not crash when it is rendered', () => {
      const helpers = renderWithRouterAndProviders(
        <MenuLayer
          history={{ location: { pathname: '/' }, push: () => null }}
          onClose={() => null}
        />
      );
    });
  });
});
