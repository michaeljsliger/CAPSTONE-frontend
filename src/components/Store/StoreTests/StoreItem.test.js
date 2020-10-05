import React from 'react';
import ReactDOM from 'react-dom';
import StoreItem from '../StoreItem';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StoreItem obj={{}} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
