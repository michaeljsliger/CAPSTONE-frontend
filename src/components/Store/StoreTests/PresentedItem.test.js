import React from 'react';
import ReactDOM from 'react-dom';
import PresentedItem from '../PresentedItem';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PresentedItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});
