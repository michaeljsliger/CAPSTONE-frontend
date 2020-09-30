import React from 'react';
import './css/App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import components
import Home from './components/Home/Home';
import Store from './components/Store/Store';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import PresentedItem from './components/Store/PresentedItem';
// import context
import StoreContext from './components/Store/StoreContext';
import STORE from './components/Store/tempStore';

const SERVER_URL = 'http://localhost:8000'

class App extends React.Component {
  state = {
    items: []
  }

  componentDidMount() {
    fetch(`${SERVER_URL}/store`)
      .then(res => res.json())
      .then(json => {
        // fetch call to set json info as items
        return this.setState({ items: json })
      }).catch(e => console.log(e))
    
  }

  render() {
    const contextValue = {
      items: this.state.items
    }

    return (
      <Router>
        <div className="App">
          <div className="header-container">
            <div className="header-text">NORTH CREEK AUTO FABRICATION</div>
            <Link to='/' className="link-container">Home</Link>
            <Link to='/about' className="link-container">About</Link>
            <Link to='/store' className="link-container">Store</Link>
            <Link to='/contact' className="link-container">Contact</Link>
          </div>
          <div className='App-content'>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/about' exact component={About} />
              <StoreContext.Provider value={contextValue}>
                <Route path='/store' exact component={Store} />
                {/* login only ^^^ */}
                <Route path='/store/:id' render={(props) => <PresentedItem {...props} />} />
              </StoreContext.Provider>
              <Route path='/contact' exact><Contact /></Route>
              {/* error */}
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}






export default App;
