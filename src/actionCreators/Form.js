import * as FORM from '../actionTypes/Form';

export function getLogin(data) {
  return {
    type: FORM.GET_LOGIN,
    data,
  };
}

export function getLoginSuccess(data) {
  return {
    type: FORM.GET_LOGIN_SUCCESS,
    data,
  };
}

export function getLoginFailure(error) {
  return {
    type: FORM.GET_LOGIN_FAILURE,
    error,
  };
}

export function getSignup(data) {
  return {
    type: FORM.GET_SIGNUP,
    data,
  };
}

export function getSignupSuccess(data) {
  return {
    type: FORM.GET_SIGNUP_SUCCESS,
    data,
  };
}

export function getSignupFailure(error) {
  return {
    type: FORM.GET_SIGNUP_FAILURE,
    error,
  };
}

export function loginDetails(data) {
  return {
    type: FORM.LOGIN_DETAILS,
    data,
  };
}

export function loginData(data) {
  return {
    type: FORM.LOGIN_DATA,
    data,
  };
}

export function signUp() {
  return {
    type: FORM.SIGN_UP,
  };
}

