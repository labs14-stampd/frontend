import React, { useEffect } from 'react';
import { useStateValue } from 'react-conflux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { BaseButton } from '../../../styles/themes';

import CredCard from '../Card/CredCard';

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
        <div>
          <input type="text" name="searchText" placeholder="Search" />
          <IssueCredButton
            type="button"
            onClick={() => history.push('/dashboard/credForm')}
            label="+ Issue Credential"
            primary
          />
        </div>
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
  margin: 50px auto 30px;
  max-width: 1600px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    width: 68%;
    justify-content: flex-end;
    align-items: center;

    input {
      background: white url('../../../images/search-icon.svg') no-repeat scroll
        1px 1px;
      background-size: 20px;
      background-position: right 13px center;
      border: 2px solid ${({ theme }) => theme.global.colors.searchBarBorder};
      color: ${({ theme }) => theme.global.colors.searchBarColor};
      height: 40px;
      margin-right: 1.5%;
      padding: 25px 3% 25px 2.5%;
      transition: 0.25s ease-in-out;
      width: 220px;
      caret-color: grey;
      border-radius: 50px;
      font-size: 1.8rem;

      &:focus {
        color: ${({ theme }) => theme.global.colors.brand};
        border-color: ${({ theme }) => theme.global.colors.brand};
        outline: none;
        padding-left: 15px;
        width: 50%;
      }
    }
  }
`;

const IssueCredButton = styled(BaseButton)`
  padding: 12px 15px;
  color: white;
  text-align: right;
  border-radius: 50px;
  margin-left: 2%;
`;

export default MainDashboard;
