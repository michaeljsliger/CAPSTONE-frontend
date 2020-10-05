import React from 'react';
import ReactDOM from 'react-dom';
import AddItemForm from './AddItemForm';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddItemForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
