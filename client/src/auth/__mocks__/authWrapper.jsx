/* eslint-disable */
export const mock = jest.fn();

export const useAuth0 = () => {
  return {
    loginWithRedirect: mock
  };
};
