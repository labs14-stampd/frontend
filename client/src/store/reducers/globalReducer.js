import { createContext } from 'react';

export const REGISTER = 'REGISTER';
export const LOGOUT = 'LOGOUT';
export const HANDLE_CRED_CHANGES = 'HANDLE_CRED_CHANGES';
export const ON_BOARD_DETAILS = 'ON_BOARD_DETAILS';
export const SET_ONBOARDED_TRUE = 'SET_ONBOARDED_TRUE';
export const RESET_CREDENTIAL_FORM = 'RESET_CREDENTIAL_FORM';
export const globalContext = createContext();

const initialState = {
  user: null,
  onboarded: false,
  ownerName: '',
  credName: '',
  description: '',
  type: '',
  studentEmail: '',
  imageUrl: '',
  criteria: '',
  issuedOn: '',
  expirationDate: '',
  schoolId: null,
  studentId: null
};

export const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        user: action.payload,
        schoolId: action.payload.id
      };
    case ON_BOARD_DETAILS:
      return {
        ...state,
        user: action.payload,
        onboarded: true
      };
    case HANDLE_CRED_CHANGES:
      return {
        ...state,
        ...action.payload
      };
    case RESET_CREDENTIAL_FORM:
      return {
        ...state,
        ownerName: '',
        credName: '',
        description: '',
        type: '',
        studentEmail: '',
        imageUrl: '',
        criteria: '',
        issuedOn: '',
        expirationDate: '',
        schoolId: state.user.id
      };
    case LOGOUT:
      return {
        onboarded: action.payload
      };
    case SET_ONBOARDED_TRUE:
      return {
        ...state,
        onboarded: true
      };
    default:
      return state;
  }
};
