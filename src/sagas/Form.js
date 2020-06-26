/* eslint-disable vars-on-top */
/* eslint-disable no-console */
import { put, takeLatest } from 'redux-saga/effects';
import envConfig from 'envConfig'; //eslint-disable-line
import * as FORM from '../actionTypes/Form';
import * as formActionCreators from '../actionCreators/Form';
import { doPost, doGet } from '../utils/fetchWrapper';

// const xhr = new XMLHttpRequest();
// const url = 'http://localhost:8000/signup';
// xhr.open('POST', url, true);
// xhr.setRequestHeader('Content-type', 'application/json');
// xhr.onreadystatechange = () => {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     const json = JSON.parse(xhr.responseText);
//     console.log(`${json.email}, ${json.name}`);
//   }
// };
// const data = JSON.stringify({ email: 'tomb@raider.com', name: 'LaraCroft' });
// xhr.send(data);


export function* getSignup() {
  try {
    const response = yield doPost(envConfig.apiEndPoints.getContacts);
    // console.log('reshma', response);
    yield put(formActionCreators.getSignupSuccess(response));
  } catch (error) {
    yield put(formActionCreators.getSignupFailure(error));
  }
}

export function* loginDetails() {
  try {
    const response = yield doGet(envConfig.apiEndPoints.getContacts);
    yield put(formActionCreators.getLoginSuccess(response));
  } catch (error) {
    yield put(formActionCreators.getLoginFailure(error));
  }
}

export function* formWatchers() {
  yield [
    takeLatest(FORM.GET_SIGNUP, getSignup),
    takeLatest(FORM.GET_LOGIN, loginDetails),
  ];
}
