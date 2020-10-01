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
import AddItemForm from './components/AddItemForm/AddItemForm';
import Header from './components/Header/Header.js';
import API_SERVICES from './services/api-services';
import LoginForm from './components/loginForm/LoginForm';

class App extends React.Component {
  state = {
    items: []
  }

  componentDidMount() {
    API_SERVICES.getAllItems()
      .then(json => {
        this.setState({items: json});
      })
  }

  render() {
    const contextValue = {
      items: this.state.items
    }

    return (
      <Router>
        <div className="App">
          <Header />
          <div className='App-content'>
            <Switch>
                          {/* error */}
              <Route path='/' exact component={Home} />
              <Route path='/store/add-item' component={AddItemForm} />
              <Route path='/login' exact component={LoginForm} />
              <Route path='/about' exact component={About} />
                <StoreContext.Provider value={contextValue}>
                  <Route path='/store' exact component={Store} />
                  {/* login only ^^^ */}
                  <Route path='/store/:id' render={(props) => <PresentedItem {...props} />} />
                </StoreContext.Provider>
              <Route path='/contact' exact><Contact /></Route>
              {/* 404 not found page */}
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}






export default App;
