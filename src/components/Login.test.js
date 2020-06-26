import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Login from './Login';


configure({ adapter: new Adapter() });

describe('Login', () => {
  const tree = shallow(<Login
    row=""
    cols=""
    input={{ value: '' }}
    meta={{ touched: true, error: true }}
  />);

  it('should be defined', () => {
    expect(Login).toBeDefined();
  });

  it('should render correctly', () => {
    expect(tree).toMatchSnapshot();
  });
  it('Called function handleChange', () => {
    tree.instance().LogIn();
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
