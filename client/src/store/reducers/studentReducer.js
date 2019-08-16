import { createContext } from 'react';

export const STUDENT_DATA_START = 'STUDENT_DATA_START';
export const STUDENT_DATA_SUCCESS = 'STUDENT_DATA_SUCCESS';
export const STUDENT_DATA_ERROR = 'STUDENT_DATA_ERROR';
export const SEARCH_HANDLE_CHANGE = 'SEARCH_HANDLE_CHANGE';
export const SET_STUDENT_DATA = 'SET_STUDENT_DATA';

export const studentContext = createContext();

const initialState = {
  studentData: null,
  studentDataSuccess: false,
  studentDataStart: false,
  studentDataError: false,
  studentSearchInput: ''
};

export const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case STUDENT_DATA_START:
      return {
        ...state,
        studentDataStart: true,
        studentDataSuccess: false,
        studentDataError: false
      };
    case STUDENT_DATA_SUCCESS:
      return {
        ...state,
        studentDataStart: false,
        studentDataSuccess: true,
        studentDataError: false,
        studentData: action.payload.data.getUserById
      };
    case STUDENT_DATA_ERROR:
      return {
        ...state,
        studentDataError: true,
        studentDataStart: false
      };
    case SEARCH_HANDLE_CHANGE:
      return {
        ...state,
        studentSearchInput: action.payload
      };
    case SET_STUDENT_DATA:
      return {
        ...state,
        studentData: {
          ...state.studentData,
          studentDetails: action.payload.data.addStudentDetail
        },
        studentDataSuccess: true
      };
    default:
      return state;
  }
};
