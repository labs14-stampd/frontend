import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useStateValue } from 'react-conflux';

import SchoolDashboard from './SchoolDashboard';
import StudentDashboard from './StudentDashboard';
import queries from './queries';
import {
  schoolContext,
  SCHOOL_DATA_START,
  SCHOOL_DATA_SUCCESS,
  SCHOOL_DATA_ERROR
} from '../../../store/reducers/schoolReducer';
import {
  studentContext,
  STUDENT_DATA_START,
  STUDENT_DATA_SUCCESS,
  STUDENT_DATA_ERROR
} from '../../../store/reducers/studentReducer';
import { globalContext } from '../../../store/reducers/globalReducer';

const Dashboard = ({ history }) => {
  const [{ user }] = useStateValue(globalContext);
  const [schoolState, schoolDispatch] = useStateValue(schoolContext);
  const [, studentDispatch] = useStateValue(studentContext);
  useEffect(() => {
    if (!schoolState.schoolData) {
      user.roleId === '2'
        ? schoolDispatch({ type: SCHOOL_DATA_START })
        : studentDispatch({ type: STUDENT_DATA_START });
      async function getUserData() {
        try {
          const { id } = user;
          const data = await queries.getUserById({
            id
          });
          user.roleId === '2'
            ? schoolDispatch({ type: SCHOOL_DATA_SUCCESS, payload: data })
            : studentDispatch({ type: STUDENT_DATA_SUCCESS, payload: data });
        } catch (err) {
          user.roleId === '2'
            ? schoolDispatch({ type: SCHOOL_DATA_ERROR })
            : studentDispatch({ type: STUDENT_DATA_ERROR });
        }
      }
      getUserData();
    }
  }, [schoolDispatch, schoolState.schoolData, user, studentDispatch]);
  return (
    <Container>
      {user.roleId === '2' ? (
        <SchoolDashboard history={history} />
      ) : (
        <StudentDashboard history={history} />
      )}
    </Container>
  );
};

SchoolDashboard.propTypes = {
  history: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

const Container = styled.div`
  padding: 70px 2% 0;
  margin: 0 auto;
  min-height: calc(100vh - 70px);
  width: 100%;
  background: #f8f8f8;
`;

export default Dashboard;
