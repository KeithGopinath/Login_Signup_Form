import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import Form from './Form';

const rootReducer = combineReducers({
  home: Form,
  form: formReducer,
});

export default rootReducer;
