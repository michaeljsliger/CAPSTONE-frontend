import React from 'react';
import ReactDOM from 'react-dom';
import Store from '../Store';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router><Store /></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});