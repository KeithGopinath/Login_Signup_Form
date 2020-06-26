/* eslint-disable object-shorthand */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getLogin, signUp } from '../actionCreators/Form';
import LogIn from './Login';
import SignUp from './Signup';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      login: false,
      signup: false,
    };
  }

  componentDidMount() {
    this.props.getLogin();
  }

  componentDidUpdate(prevProps) {
    if (this.props.home.signin !== prevProps.home.signin) {
      setTimeout(() => {
        this.setState({
          signup: false,
        });
        this.props.signUp();
      }, 3000);
    }
  }

  logIn = () => {
    this.setState({
      login: true,
      signup: false,
    });
  }

  signUp = () => {
    this.setState({
      signup: true,
      login: false,
    });
  }

  handleClose = () => {
    this.setState({
      show: false,
    });
  }

  render() {
    const { show, login, signup } = this.state;
    const { error } = this.props;
    return (
      <div>
        <Modal show={show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>WELCOME TO ALTIMETRIK</Modal.Title>
          </Modal.Header>
          {login && <Modal.Body>{<LogIn />}</Modal.Body>}
          {signup && <Modal.Body>{<SignUp />}</Modal.Body>}
          {(!login && !signup) &&
            <Modal.Footer>
              {error && <span className="success-msg" style={{ color: 'red' }}>Network Error Failed To Fetch</span>}
              <Button className="modal-button" variant="secondary" onClick={this.logIn}>
                Log In
              </Button>
              <Button className="modal-button" variant="primary" onClick={this.signUp}>
                Sign Up
              </Button>
            </Modal.Footer>}
        </Modal>
      </div>
    );
  }
}

Home.propTypes = {
  home: PropTypes.object,
  signin: PropTypes.bool,
  signUp: PropTypes.func,
  getLogin: PropTypes.func,
  error: PropTypes.object,
};

function mapStateToProps(state) {
  const { home } = state;
  // const { signup } = form;
  // const { values } = signup;
  const { error } = home;
  return {
    // values,
    home,
    error,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getLogin: getLogin,
    signUp: signUp,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

