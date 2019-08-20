import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useStateValue } from 'react-conflux';
import { globalContext } from '../../store/reducers/globalReducer';
import { schoolContext } from '../../store/reducers/schoolReducer';

import StudentSettings from './StudentSettings/StudentSettings';

const Settings = props => {
  const [{ user }] = useStateValue(globalContext);
  const [schoolState, schoolDispatch] = useStateValue(schoolContext);
  return (
    <Container>
      <StudentSettings {...props} />
    </Container>
  );
};

const Container = styled.section`
  padding: 70px 3% 0;
  margin: 0 auto;
  min-height: calc(100vh - 70px);
  width: 100%;
`;

export default Settings;
