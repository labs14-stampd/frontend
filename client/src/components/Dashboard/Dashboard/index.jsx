import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useStateValue } from 'react-conflux';
import Loader from 'react-loader-spinner';

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
  const [studentState, studentDispatch] = useStateValue(studentContext);
  useEffect(() => {
    if (!schoolState.schoolData && !studentState.studentData) {
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
  }, [
    schoolDispatch,
    schoolState.schoolData,
    studentDispatch,
    studentState.studentData,
    user
  ]);
  return (
    <Container>
      {!schoolState.schoolData && !studentState.studentData ? (
        <Loader type="RevolvingDot" color="#7D4CDB" height={100} width={100} />
      ) : (
        <>
          {Number(user.roleId) === 2 && <SchoolDashboard history={history} />}
          {Number(user.roleId) === 3 && <StudentDashboard history={history} />}
        </>
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
`;

export default Dashboard;
