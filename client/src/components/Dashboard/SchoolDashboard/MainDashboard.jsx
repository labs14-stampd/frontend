import React, { useEffect } from 'react';
import { useStateValue } from 'react-conflux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {} from 'grommet';

import CredCard from './CredCard'

import queries from './queries';
import {
  schoolContext,
  SCHOOL_DATA_START,
  SCHOOL_DATA_SUCCESS,
  SCHOOL_DATA_ERROR
} from '../../../store/reducers/schoolReducer';

const MainDashboard = ({ history }) => {
  const [state, dispatch] = useStateValue(schoolContext);
  useEffect(() => {
    dispatch({ type: SCHOOL_DATA_START });
    async function getUserData() {
      try {
        const { id } = localStorage;
        const data = await queries.getUserById({
          id
        });
        dispatch({ type: SCHOOL_DATA_SUCCESS, payload: data });
      } catch (err) {
        dispatch({ type: SCHOOL_DATA_ERROR });
      }
    }
    getUserData();
  }, []);
  return (
    <>
      <SchoolDetails>
        {state.schoolDataSuccess && (
          <h2>{state.schoolData.schoolDetails.name}</h2>
        )}
        <button
          type="button"
          onClick={() => history.push('/dashboard/credForm')}
        >
          Issue Credential
        </button>
      </SchoolDetails>
      {state.schoolDataSuccess &&
        state.schoolData.schoolDetails.credentials.map(cred => {
          return <CredCard key={cred.id} credName={cred.credName} />;
        })}
    </>
  );
};

MainDashboard.propTypes = {
  history: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

const SchoolDetails = styled.section`
  margin: 50px auto 0;
  max-width: 1600px;
  width: 100%;
`;



export default MainDashboard;
