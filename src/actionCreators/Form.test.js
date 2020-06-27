import * as FORM from '../actionTypes/Form';
import * as FormActionCreators from '../actionCreators/Form';

describe('Form Actions', () => {
  it('should returns submit contact action type', () => {
    const getLogin = FormActionCreators.getLogin();
    expect(getLogin.type).toEqual(FORM.GET_LOGIN);
  });

  it('should returns submit contact success action type', () => {
    const getLoginSuccess = FormActionCreators.getLoginSuccess();
    expect(getLoginSuccess.type).toEqual(FORM.GET_LOGIN_SUCCESS);
  });

  it('should returns submit contact failure action type', () => {
    const getLoginFailure = FormActionCreators.getLoginFailure();
    expect(getLoginFailure.type).toEqual(FORM.GET_LOGIN_FAILURE);
  });

  it('should returns clear action type', () => {
    const getSignup = FormActionCreators.getSignup();
    expect(getSignup.type).toEqual(FORM.GET_SIGNUP);
  });

  it('should returns submit contact success action type', () => {
    const getSignupSuccess = FormActionCreators.getSignupSuccess();
    expect(getSignupSuccess.type).toEqual(FORM.GET_SIGNUP_SUCCESS);
  });

  it('should returns submit contact failure action type', () => {
    const getSignupFailure = FormActionCreators.getSignupFailure();
    expect(getSignupFailure.type).toEqual(FORM.GET_SIGNUP_FAILURE);
  });

  it('should returns clear action type', () => {
    const loginDetails = FormActionCreators.loginDetails();
    expect(loginDetails.type).toEqual(FORM.LOGIN_DETAILS);
  });

  it('should returns clear action type', () => {
    const loginData = FormActionCreators.loginData();
    expect(loginData.type).toEqual(FORM.LOGIN_DATA);
  });

  it('should returns clear action type', () => {
    const signUp = FormActionCreators.signUp();
    expect(signUp.type).toEqual(FORM.SIGN_UP);
  });
});
