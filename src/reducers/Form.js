import * as FORM from '../actionTypes/Form';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case FORM.GET_SIGNUP:
      return {
        ...state,
      };
    case FORM.GET_LOGIN:
      return {
        ...state,
      };
    case FORM.GET_LOGIN_SUCCESS:
      return {
        ...state,
        newlogin: action.data,
      };
    case FORM.GET_LOGIN_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case FORM.LOGIN_DATA:
      return {
        ...state,
        signuplogin: action.data,
        signin: true,
      };
    case FORM.SIGN_UP:
      return {
        ...state,
        signin: false,
      };
    default:
      return state;
  }
};

