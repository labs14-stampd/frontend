import { createContext } from 'react';

export const ON_BOARD_DETAILS = 'ON_BOARD_DETAILS';
export const globalContext = createContext();

const initialState = {
  greeting: 'Stampd'
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER':
      return {
        ...state,
        greeting: action.payload.email
      };
    case ON_BOARD_DETAILS:
      return state;
    default:
      return state;
  }
};

export default globalReducer;
