import React, {createContext, useContext} from 'react';

export const testAuthContext = createContext();
export const useAuth0 = () => useContext(testAuthContext);
export const TestAuthProvider = ({ children, loading, isAuthenticated }) => {
  return (
    <testAuthContext.Provider
      loading={loading}
      isAuthenticated={isAuthenticated}
    >
      {children}
    </testAuthContext.Provider>
  )
}