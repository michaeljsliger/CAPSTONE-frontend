import React from 'react';
import ReactDOM from 'react-dom';
import PresentedItem from '../PresentedItem';
import { BrowserRouter as Router } from 'react-router-dom';


test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router><PresentedItem /></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});
