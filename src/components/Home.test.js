/* eslint-disable function-paren-newline */
import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from './Home';
import { history } from '../routes';
import { fakeStore } from '../config/jest/fakeStore';


configure({ adapter: new Adapter() });

history.push = jest.fn();


describe('Home', () => {
  const tree = shallow(<Home />);

  it('should be defined', () => {
    expect(Home).toBeDefined();
  });

  it('should render correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});


describe('Home', () => {
  window.open = jest.fn();
  const logIn = jest.fn();
  const signUp = jest.fn();
  const handleClose = jest.fn();

  // const state = {
  //   home: {
  //     error: 'abcd',
  //   },
  // };
  // const state = {
  //   // form: {
  //   //   signup: {},
  //   // },
  //   home: {
  //     // newlogin: {
  //     //   password: 'altimetrik',
  //     //   username: 'altimetrik',
  //     // },
  //     // signuplogin: {
  //     //   password: 'altimetrik',
  //     //   username: 'altimetrik',
  //     // },
  //   },

  // };
  // const tree = shallow(<Home />);

  // it('should be defined', () => {
  //   expect(Home).toBeDefined();
  // });

  // it('should render correctly', () => {
  //   expect(tree).toMatchSnapshot();
  // });

  const store = fakeStore();
  const tree = mount(
    <Provider store={store}>
      <Router history={history}>
        <Home logIn={logIn} signUp={signUp} handleClose={handleClose} />
      </Router>
    </Provider>
  );

  it('should be defined', () => {
    expect(Home).toBeDefined();
  });

  it('should render correctly', () => {
    expect(tree).toMatchSnapshot();
  });
//   it('should render Table Component', () => {
//     expect(tree.find('Tables').length).toBe(1);
//   });

//   it('should render Accordion component', () => {
//     expect(tree.find('Accordion').length).toBe(1);
//   });

//   it('should render Panel Group correctly', () => {
//     expect(tree.find('PanelGroup').length).toBe(1);
//   });

//   it('should render Dropdown component', () => {
//     expect(tree.find('Dropdown').length).toBe(1);
//   });
});
