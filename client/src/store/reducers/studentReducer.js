import { createContext } from 'react';

export const STUDENT_DATA_START = 'STUDENT_DATA_START';
export const STUDENT_DATA_SUCCESS = 'STUDENT_DATA_SUCCESS';
export const STUDENT_DATA_ERROR = 'STUDENT_DATA_ERROR';
export const SEARCH_HANDLE_CHANGE = 'SEARCH_HANDLE_CHANGE';
export const SET_STUDENT_DATA = 'SET_STUDENT_DATA';
export const STUDENT_EMAIL_UPDATE = 'STUDENT_EMAIL_UPDATE';
export const REMOVE_STUDENT_EMAIL = 'REMOVE_STUDENT_EMAIL';

export const studentContext = createContext();

const initialState = {
  studentData: null,
  studentDataSuccess: false,
  studentDataStart: false,
  studentDataError: false,
  studentSearchInput: ''
};

export const studentReducer = (state = initialState, action) => {
  console.log(action);
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
    case STUDENT_EMAIL_UPDATE:
      const { email, id, userId } = action.payload;
      return {
        ...state,
        studentData: {
          ...state.studentData,
          studentDetails: {
            ...state.studentData.studentDetails,
            emailList: [
              ...state.studentData.studentDetails.emailList,
              { email, id, userId }
            ],
            credentials: [
              ...state.studentData.studentDetails.credentials,
              ...action.payload.credentials
            ]
          }
        }
      };
    case REMOVE_STUDENT_EMAIL:
      return {
        ...state,
        studentData: {
          ...state.studentData,
          studentDetails: {
            ...state.studentData.studentDetails,
            emailList: action.payload.emailList,
            credentials: action.payload.credList
          }
        }
      };
    default:
      return state;
  }
};
