import { SET_USER, SET_USER_LOADING } from "./actionsTypes";

export const setUserAction = (user) => ({
  type: SET_USER,
  payload: user,
});

export const setUserLoadingAction = (bool) => ({
  type: SET_USER_LOADING,
  payload: bool,
});
