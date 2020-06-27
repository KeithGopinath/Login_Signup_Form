import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Login from './Login';


configure({ adapter: new Adapter() });

const submit = jest.fn();
const LogIn = jest.fn();
const renderField = jest.fn();

const initialProps = {
  submit,
  LogIn,
  renderField,
};

describe('Login', () => {
  const tree = shallow(<Login
    {...initialProps}
    form={{ signup: { registeredFields: { firstName: 'firstName', lirstName: 'lirstName' } } }}
    home={{
      newlogin: [{ password: 'altimetrik', username: 'altimetrik' }],
      signin: false,
      signuplogin: [{ username: 'altimetrik', password: 'altimetrik' }, { username: 'keith', password: 'keith' }],
    }}
    handleSubmit={submit}
  />);

  it('should render correctly', () => {
    expect(tree).toMatchSnapshot();
  });

  it('should be defined', () => {
    expect(Login).toBeDefined();
  });

  it('login click handler', () => {
    const simulateClick = tree.find('.form').prop('handleSubmit');
    simulateClick();
    expect(submit).toBeCalled();
  });
});
