import actionTypes from "./actionTypes";

export const userCreateAction = (user) => ({
  type: actionTypes.userCreate,
  user,
});
