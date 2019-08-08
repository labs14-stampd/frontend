import { createContext } from 'react';

export const HANDLE_CRED_CHANGES = 'HANDLE_CRED_CHANGES';
export const ON_BOARD_DETAILS = 'ON_BOARD_DETAILS';
export const globalContext = createContext();

const initialState = {
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

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_BOARD_DETAILS:
      return state;
    case HANDLE_CRED_CHANGES:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      }
    default:
      return state;
  }
};

export default globalReducer;
