import React from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import configureStore from './configureStore';
import RootContainer from './containers/RootContainer';
import '../assets/sass/index.scss';

const store = configureStore();

ReactDOM.render(<RootContainer store={store} />, document.getElementById('root'));
