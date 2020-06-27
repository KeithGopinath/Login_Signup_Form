/* eslint-disable function-paren-newline */
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Home } from './Home';
// import { history } from '../routes';


configure({ adapter: new Adapter() });

// history.push = jest.fn();

const getLogin = jest.fn();
const signUp = jest.fn();

const initialProps = {
  getLogin,
  signUp,
};

describe('Home', () => {
  const tree = shallow(<Home
    {...initialProps}
    signin
    signUp={signUp}
    form={{}}
    home={{
      newlogin: [{ password: 'altimetrik', username: 'altimetrik' }],
      error: 'abcd',
    }}
  />);

  it('should render correctly', () => {
    expect(tree).toMatchSnapshot();
    tree.instance().logIn();
    tree.instance().signUp();
    tree.instance().handleClose();
  });

  it('should be defined', () => {
    expect(Home).toBeDefined();
  });

  it('should call component did update', () => {
    const instance = tree.instance();
    instance.componentDidUpdate({
      signin: false,
    });
    expect(tree.state().value).toBe(undefined);
  });
});
