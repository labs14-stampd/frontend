import React from 'react';
import { useStateValue } from 'react-conflux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { InfiniteScroll, Box, Button } from 'grommet';
import FuzzySearch from 'fuzzy-search';

import searchIcon from '../../../images/search-icon.svg';

import CredCard from '../Card/CredCard';
import DashboardLoading from '../DashboardLoading';

import {
  schoolContext,
  SEARCH_HANDLE_CHANGE,
  CLEAR_SEARCH_INPUT
} from '../../../store/reducers/schoolReducer';

const SchoolDashboard = ({ history }) => {
  const [schoolState, schoolDispatch] = useStateValue(schoolContext);
  let searchResult = [];
  if (schoolState.schoolData) {
    const searchTerms = ['credName', 'criteria', 'ownerName', 'issuedOn'];
    const searchOptions = {
      caseSensitive: false
    };
    const searcher = new FuzzySearch(
      schoolState.schoolData.schoolDetails.credentials,
      searchTerms,
      searchOptions
    );
    searchResult = searcher.search(schoolState.schoolSearchInput);
  }
  const handleChange = e => {
    schoolDispatch({ type: SEARCH_HANDLE_CHANGE, payload: e.target.value });
  };
  const issueCredential = e => {
    e.preventDefault();
    schoolDispatch({ type: CLEAR_SEARCH_INPUT });
    history.push('/dashboard/credForm');
  };
  console.log(schoolState.schoolData);
  if (!schoolState.schoolData) return <div />;
  return (
    <>
      <SchoolDetails>
        {schoolState.schoolDataSuccess ? (
          <h2>{schoolState.schoolData.schoolDetails.name}</h2>
        ) : (
          <div />
        )}
        <div>
          <input
            type="text"
            name="searchText"
            placeholder="Search Credentials"
            onChange={handleChange}
            value={schoolState.schoolSearchInput}
          />
          <IssueCredButton
            type="button"
            onClick={issueCredential}
            label="+ Issue Credential"
            primary
          />
        </div>
      </SchoolDetails>
      {schoolState.schoolDataStart ? (
        <DashboardLoading />
      ) : (
        <>
          {schoolState.schoolDataSuccess && searchResult.length ? (
            <CredCardContainer>
              <InfiniteScroll items={searchResult} step={10}>
                {item => {
                  return <CredCard key={item.id} cred={item} />;
                }}
              </InfiniteScroll>
            </CredCardContainer>
          ) : (
            schoolState.schoolDataSuccess && (
              <NothingFound>
                {!schoolState.schoolData.schoolDetails.credentials.length
                  ? 'Issue a credential to get started...'
                  : 'No results were found..'}
              </NothingFound>
            )
          )}
        </>
      )}
    </>
  );
};

SchoolDashboard.propTypes = {
  history: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

const SchoolDetails = styled.section`
  margin: 50px auto 30px;
  padding: 0 2%;
  max-width: 1675px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 800px) {
    flex-direction: column;
  }

  @media (max-width: 500px) {
    flex-direction: column;
  }

  div {
    display: flex;
    width: 68%;
    justify-content: flex-end;
    align-items: center;

    @media (max-width: 800px) {
      flex-direction: row;
      justify-content: center;
      width: 100%;
      margin: 3% 0;
    }

    @media (max-width: 500px) {
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      margin: 3% 0;
    }

    input {
      background: white url(${searchIcon}) no-repeat scroll 5px 5px;
      background-size: 20px;
      background-position: right 13px center;
      border: 2px solid #adadad;
      color: #adadad;
      height: 40px;
      margin-right: 1.5%;
      padding: 25px;
      transition: 0.25s ease-in-out;
      width: 220px;
      caret-color: grey;
      border-radius: 50px;
      font-size: 1.8rem;

      ::placeholder {
        color: #adadad;
        font-weight: 700;
      }

      &:focus {
        color: #7d4cdb;
        border-color: #fd6fff;
        outline: none;
        padding-left: 15px;
        width: 50%;
      }

      @media (max-width: 800px) {
        width: 48%;
        transition: none;

        &:focus {
          color: #7d4cdb;
          border-color: #fd6fff;
          outline: none;
          padding: 25px;
          width: 48%;
        }
      }

      @media (max-width: 500px) {
        width: 90%;
        margin-bottom: 4.5%;
        transition: none;

        &:focus {
          color: #7d4cdb;
          border-color: #fd6fff;
          outline: none;
          padding: 25px;
          width: 90%;
        }
      }
    }
  }
`;

const IssueCredButton = styled(Button)`
  padding: 12px 15px;
  color: white;
  text-align: right;
  border-radius: 50px;
  margin-left: 2%;
  font-family: 'Roboto', sans-serif;

  :hover {
    color: #fd6fff;
  }

  @media (max-width: 800px) {
    width: 48%;
    text-align: center;
    margin-left: 0;
  }
  @media (max-width: 500px) {
    width: 90%;
    text-align: center;
    margin-left: 0;
  }
`;

const NothingFound = styled.p`
  width: 100%;
  text-align: center;
  font-size: 2.4rem;
  margin-top: 20vh;
  color: #adadad;
`;

const CredCardContainer = styled(Box)`
  height: 75vh;
  overflow: auto;
  padding: 10px 2%;
`;

export default SchoolDashboard;
