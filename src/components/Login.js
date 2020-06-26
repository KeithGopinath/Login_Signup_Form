/* eslint-disable react/sort-comp */
import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import { connect } from 'react-redux';
import { history } from '../routes';
import { getLogin } from '../actionCreators/Form';


class LogIn extends React.Component {
  submit = (values) =>
    axios.get('http://localhost:8000/contacts')
      .then((response) => {
        (getLogin(response));
        return response;
        // resolve(data);
      })
      .then((response) => {
        const { signuplogin } = this.props;
        const user = response.data;
        const newuser = signuplogin;
        const registeruser = newuser || user;
        if (registeruser.every((obj) => obj.username !== values.username)) {
          throw new SubmissionError({
            username: 'User does not exist',
            _error: 'Login failed!',
          });
        } else if (registeruser.every((obj) => obj.password !== values.password)) {
          throw new SubmissionError({
            password: 'Wrong password',
            _error: 'Login failed!',
          });
        } else {
          history.push('/dashboard');
        }
      })


  renderField = ({
    input, label, type, meta: { touched, error },
  }) => (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span className="error-msg">{error}</span>}
      </div>
    </div>
  );

  LogIn = (props) => {
    const {
      error, handleSubmit, submitting,
    } = props;
    return (
      <form onSubmit={handleSubmit(this.submit)}>
        <Field
          name="username"
          type="text"
          component={this.renderField}
          label="Username"
        />
        <Field
          name="password"
          type="password"
          component={this.renderField}
          label="Password"
        />
        {error && <strong style={{ color: 'red' }}>{error}</strong>}
        <Modal.Footer>
          <Button className="modal-button" variant="secondary" type="submit" disabled={submitting}>
            Log In
          </Button>
        </Modal.Footer>
      </form>
    );
  };

  render() {
    return (
      this.LogIn(this.props)
    );
  }
}

LogIn.propTypes = {
  signuplogin: PropTypes.array,
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  error: PropTypes.string,
};

function mapStateToProps(state) {
  const { form, home } = state;
  const { signuplogin } = home;
  return {
    form,
    home,
    signuplogin,
  };
}

const LogInForm = connect(mapStateToProps)(LogIn);

export default reduxForm({
  form: 'login',
})(LogInForm);
