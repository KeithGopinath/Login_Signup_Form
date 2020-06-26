/* eslint-disable object-shorthand */
/* eslint-disable quote-props */
import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Button, Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getSignup, loginData } from '../actionCreators/Form';
import mock from '../mocks/db.json';

const country = [
  {
    value: '',
    country: '',
  },
  {
    value: 'US',
    country: 'US',
  },
  {
    value: 'Australia',
    country: 'Australia',
  },
  {
    value: 'Spain',
    country: 'Spain',
  },
  {
    value: 'France',
    country: 'France',
  },
  {
    value: 'Germany',
    country: 'Germany',
  },
  {
    value: 'England',
    country: 'England',
  },
  {
    value: 'India',
    country: 'India',
  },
];

class SignUp extends React.Component {
  formValues = () => {
    const { values } = this.props;
    this.props.getSignup(values);
    this.updateLoginData();
  };

  updateLoginData = () => {
    const { values = {} } = this.props;
    const { userName, password } = values;
    const loginDetails = mock.contacts;
    loginDetails.push({
      'username': userName,
      'password': password,
    });
    this.props.loginData(loginDetails);
  }

  SignUp = (props) => {
    const {
      handleSubmit, submitting, home,
    } = props;
    const { signin } = home;
    return (
      <form onSubmit={handleSubmit(this.formValues)}>
        <div>
          <label>Username</label>
          <div>
            <Field
              name="userName"
              component="input"
              type="text"
              placeholder="Username"
            />
          </div>
        </div>
        <div>
          <label>Password</label>
          <div>
            <Field
              name="password"
              component="input"
              type="text"
              placeholder="Password"
            />
          </div>
        </div>
        <div>
          <label>First Name</label>
          <div>
            <Field
              name="firstName"
              component="input"
              type="text"
              placeholder="First Name"
            />
          </div>
        </div>
        <div>
          <label>Last Name</label>
          <div>
            <Field
              name="lastName"
              component="input"
              type="text"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div>
          <label>Email</label>
          <div>
            <Field
              name="email"
              component="input"
              type="email"
              placeholder="Email"
            />
          </div>
        </div>
        <div>
          <label>Sex</label>
          <div>
            <label>
              <Field name="sex" component="input" type="radio" value="male" />{' '}
            Male
            </label>
            <label style={{ display: 'block' }}>
              <Field name="sex" component="input" type="radio" value="female" />{' '}
            Female
            </label>
            <label style={{ display: 'block' }}>
              <Field name="sex" component="input" type="radio" value="other" />{' '}
            Other
            </label>
          </div>
        </div>
        <div>
          <label>Country</label>
          <div>
            <Field name="country" component="select">
              {country.map((obj) => <option >{obj.country}</option>)}
            </Field>
          </div>
        </div>
        <div>
          <Modal.Footer>
            {signin && <span className="success-msg">You Have Signed In Succesfully, Have a Great Day!</span>}
            <Button className="modal-button" variant="secondary" type="submit" disabled={submitting} >
              Sign Up
            </Button>
          </Modal.Footer>
        </div>
      </form>
    );
  };

  render() {
    return (
      this.SignUp(this.props)
    );
  }
}

SignUp.propTypes = {
  home: PropTypes.object,
  values: PropTypes.object,
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  getSignup: PropTypes.func,
  loginData: PropTypes.func,
};

function mapStateToProps(state) {
  const { form, home } = state;
  const { signup = {} } = form;
  const { values } = signup;
  return {
    values,
    home,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getSignup: getSignup,
    loginData: loginData,
  }, dispatch);
}

const SignUpForm = connect(mapStateToProps, mapDispatchToProps)(SignUp);

export default reduxForm({
  form: 'signup',
})(SignUpForm);
