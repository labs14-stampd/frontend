import { createContext } from 'react';

export const SCHOOL_DATA_START = 'SCHOOL_DATA_START';
export const SCHOOL_DATA_SUCCESS = 'SCHOOL_DATA_SUCCESS';
export const SCHOOL_DATA_ERROR = 'SCHOOL_DATA_ERROR';

export const schoolContext = createContext();

const initialState = {
  schoolData: null,
  schoolDataSuccess: false,
  schoolDataStart: false,
  schoolDataError: false
};

export const schoolReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case SCHOOL_DATA_START:
      return {
        ...state,
        schoolDataStart: true,
        schoolDataSuccess: false,
        schoolDataError: false
      };
    case SCHOOL_DATA_SUCCESS:
      return {
        ...state,
        schoolDataStart: false,
        schoolDataSuccess: true,
        schoolDataError: false,
        schoolData: action.payload.data.getUserById
      };
    case SCHOOL_DATA_ERROR:
      return {
        ...state,
        schoolDataError: true,
        schoolDataStart: false
      };
    default:
      return state;
  }
};
