import { SET_USER, SET_USER_LOADING } from "./actionsTypes";

const initialState = {
  user: null,
  isLoading: false,
};

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER: {
      return { ...state, user: action.payload };
    }
    case SET_USER_LOADING: {
      return { ...state, isLoading: action.payload };
    }
    default:
      return state;
  }
}
