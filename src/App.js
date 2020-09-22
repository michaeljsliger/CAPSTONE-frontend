import React from 'react';
import './css/App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import Store from './components/Store/Store';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="header-container">
          <Link to='/' className="link-container">Home</Link>
          <Link to='/about' className="link-container">About</Link>
          <Link to='/store' className="link-container">Store</Link>
          <Link to='/contact' className="link-container">Contact</Link>
        </div>
        <div className='App-content'>
          <Switch>
            <Route path='/' exact><Home /></Route>
            <Route path='/about' exact><About /></Route>
            <Route path='/store' exact><Store /></Route>
            <Route path='/contact' exact><Contact /></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}






export default App;
