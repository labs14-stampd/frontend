import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useStateValue } from 'react-conflux';
import { globalContext } from '../../store/reducers/globalReducer';
import { schoolContext } from '../../store/reducers/schoolReducer';

const Settings = () => {
  const [{ user }] = useStateValue(globalContext);
  const [schoolState, schoolDispatch] = useStateValue(schoolContext);
  console.log(user);
  return (
    <Container>
      <div>
        <h2>{user.email}</h2>
      </div>
    </Container>
  );
};

const Container = styled.section`
  padding: 70px 3% 0;
  margin: 0 auto;
  min-height: calc(100vh - 70px);
  width: 100%;

  div {
    margin: 0 auto;
    width: 100%;
    max-width: 1600px;
  }
`;

export default Settings;
