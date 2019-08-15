/* eslint-disable */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent } from '@testing-library/react';
import {
  renderWithRouterAndProviders,
  rendererWithRouterAndProviders
} from '../testHelpers';

import CredCardDeleteBtn from '../components/Dashboard/Card/CredCardDeleteBtn';

describe('<CredCardDeleteBtn />', () => {
  it('should successfully render the component without crashing', () => {
    const helpers = renderWithRouterAndProviders(
      <CredCardDeleteBtn credId="1" credHash="testing" />
    );
  });

  it('should match the previous snapshot of the component', () => {
    const tree = rendererWithRouterAndProviders(
      <CredCardDeleteBtn credId="5" credHash="testing" />
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
