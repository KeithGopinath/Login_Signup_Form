import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { SignUp } from './Signup';


configure({ adapter: new Adapter() });

const getSignup = jest.fn();
const loginData = jest.fn();
const formValues = jest.fn();
const initialProps = {
  getSignup,
  loginData,
};

describe('Signup', () => {
  const tree = shallow(<SignUp
    {...initialProps}
    form={{ signup: { registeredFields: { firstName: 'firstName', lirstName: 'lirstName' } } }}
    home={{
      newlogin: [{ password: 'altimetrik', username: 'altimetrik' }],
      signin: false,
      signuplogin: [{ username: 'altimetrik', password: 'altimetrik' }, { username: 'keith', password: 'keith' }],
    }}
    handleSubmit={formValues}
  />);

  it('should render correctly', () => {
    expect(tree).toMatchSnapshot();
  });

  it('should be defined', () => {
    expect(SignUp).toBeDefined();
  });

  it('should call click handler', () => {
    const simulateClick = tree.find('.form').prop('handleSubmit');
    simulateClick();
    expect(formValues).toBeCalled();
  });
});
