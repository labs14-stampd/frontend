import React, { useEffect } from 'react';
import { useStateValue } from 'react-conflux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { BaseButton } from '../../../styles/themes';

import CredCard from './CredCard';

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
        <IssueCredButtonContainer>
          <IssueCredButton
            type="button"
            onClick={() => history.push('/dashboard/credForm')}
            label="+ Issue Credential"
            primary
          />
        </IssueCredButtonContainer>
      </SchoolDetails>
      {state.schoolDataSuccess &&
        state.schoolData.schoolDetails.credentials.map(cred => {
          return <CredCard key={cred.id} cred={cred} />;
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

const IssueCredButton = styled(BaseButton)`
  padding: 12px 15px;
  color: white;
  text-align: right;
  border-radius: 50px;
`;

const IssueCredButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

export default MainDashboard;
