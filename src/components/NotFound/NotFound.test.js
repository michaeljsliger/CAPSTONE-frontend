import React from 'react';
import ReactDOM from 'react-dom';
import NotFound from './NotFound';
import { BrowserRouter as Router, Link } from 'react-router-dom';


test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router><NotFound /></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});
