import { createContext } from 'react';

export const ON_BOARD_DETAILS = 'ON_BOARD_DETAILS';
export const globalContext = createContext();

const initialState = {
  greeting: 'Stampd'
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_BOARD_DETAILS:
      console.log('Woohoo');
      return state;
    default:
      return state;
  }
};

export default globalReducer;
