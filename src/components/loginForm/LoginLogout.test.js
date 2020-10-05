import React from 'react';
import ReactDOM from 'react-dom';
import LoginLogout from './LoginLogout';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router><LoginLogout /></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});
