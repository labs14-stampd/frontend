import { createContext } from 'react';

export const schoolContext = createContext();

const initialState = {};

export const schoolReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
