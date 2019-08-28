import { createContext } from 'react';

export const SCHOOL_DATA_START = 'SCHOOL_DATA_START';
export const SCHOOL_DATA_SUCCESS = 'SCHOOL_DATA_SUCCESS';
export const SCHOOL_DATA_ERROR = 'SCHOOL_DATA_ERROR';
export const SEARCH_HANDLE_CHANGE = 'SEARCH_HANDLE_CHANGE';
export const REMOVE_CREDENTIAL_START = 'REMOVE_CREDENTIAL_START';
export const REMOVE_CREDENTIAL_SUCCESS = 'REMOVE_CREDENTIAL_SUCCESS';
export const REMOVE_CREDENTIAL_ERROR = 'REMOVE_CREDENTIAL_ERROR';
export const UPDATE_CRED_DATA = 'UPDATE_CRED_DATA';
export const SET_SCHOOL_DATA = 'SET_SCHOOL_DATA';
export const CLEAR_SEARCH_INPUT = 'CLEAR_SEARCH_INPUT';

export const schoolContext = createContext();

const initialState = {
  schoolData: null,
  schoolDataSuccess: false,
  schoolDataStart: false,
  schoolDataError: false,
  schoolSearchInput: '',
  removeCredentialStart: false,
  removeCredentialSuccess: false,
  removeCredentialError: false
};

export const schoolReducer = (state = initialState, action) => {
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
    case SEARCH_HANDLE_CHANGE:
      return {
        ...state,
        schoolSearchInput: action.payload
      };
    case REMOVE_CREDENTIAL_START:
      return {
        ...state,
        removeCredentialStart: true,
        removeCredentialSuccess: false,
        removeCredentialError: false
      };
    case REMOVE_CREDENTIAL_SUCCESS:
      return {
        ...state,
        removeCredentialStart: false,
        removeCredentialSuccess: true,
        removeCredentialError: false,
        schoolData: {
          ...state.schoolData,
          schoolDetails: {
            ...state.schoolData.schoolDetails,
            credentials: state.schoolData.schoolDetails.credentials.filter(
              credential => credential.id !== action.payload.credId
            )
          }
        }
      };
    case REMOVE_CREDENTIAL_ERROR:
      return {
        ...state,
        removeCredentialStart: false,
        removeCredentialSuccess: false,
        removeCredentialError: true
      };
    case UPDATE_CRED_DATA:
      return {
        ...state,
        schoolData: {
          ...state.schoolData,
          schoolDetails: {
            ...state.schoolData.schoolDetails,
            credentials: action.payload
          }
        }
      };
    case SET_SCHOOL_DATA:
      return {
        ...state,
        schoolData: {
          ...state.schoolData,
          schoolDetails: action.payload.data.addSchoolDetail
        },
        schoolDataSuccess: true
      };
    case CLEAR_SEARCH_INPUT:
      return {
        ...state,
        schoolSearchInput: ''
      };
    default:
      return state;
  }
};
