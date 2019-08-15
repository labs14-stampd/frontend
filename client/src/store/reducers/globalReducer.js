import { createContext } from 'react';

export const REGISTER = 'REGISTER';
export const HANDLE_CRED_CHANGES = 'HANDLE_CRED_CHANGES';
export const ON_BOARD_DETAILS = 'ON_BOARD_DETAILS';
export const RESET_CREDENTIAL_FORM = 'RESET_CREDENTIAL_FORM';
export const globalContext = createContext();

const initialState = {
  user: null,
  ownerName: '',
  credName: '',
  description: '',
  type: '',
  studentEmail: '',
  imageUrl: '',
  criteria: '',
  issuedOn: '',
  expirationDate: '',
  schoolId: localStorage.id
};

export const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        user: action.payload
      };
    case ON_BOARD_DETAILS:
      return state;
    case HANDLE_CRED_CHANGES:
      return {
        ...state,
        [action.payload.name]: action.payload.value
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
        schoolId: localStorage.id
      };
    default:
      return state;
  }
};

export default globalReducer;
