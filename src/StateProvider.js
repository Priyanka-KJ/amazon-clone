import React, { createContext, useContext, useReducer } from "react";
// Prepares the datalayer
export const StateContext = createContext();

// wraps the app and provides the datalayer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
// Pull the information from the datalayer
export const useStateValue = () => useContext(StateContext);
