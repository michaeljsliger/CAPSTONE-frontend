import React from 'react';
import './css/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import components
import Home from './components/Home/Home';
import Store from './components/Store/Store';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import PresentedItem from './components/Store/PresentedItem';
import AddItemForm from './components/AddItemForm/AddItemForm';
import Header from './components/Header/Header.js';
import LoginForm from './components/loginForm/LoginForm';
import NotFound from './components/NotFound/NotFound';
// import context
import StoreContext from './components/Store/StoreContext';
// import services
import API_SERVICES from './services/api-services';
import PrivateRoute from './routers/PrivateRoute';
import PublicRoute from './routers/PublicRoute';


class App extends React.Component {
  state = {
    items: []
  }

  componentDidMount() {
    API_SERVICES.getAllItems()
      .then(json => {
        this.setState({ items: json });
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
              <Route path='/' exact component={Home} />
              <Route path='/about' exact component={About} />
              <Route path='/contact' exact><Contact /></Route>
              <PublicRoute path='/login' exact component={LoginForm} />
              <PrivateRoute path='/store/add-item' exact component={AddItemForm} />
              <StoreContext.Provider path="/store" value={contextValue}>
                <PrivateRoute path='/store' exact component={Store} />
                <PrivateRoute path='/store/:id' exact component={PresentedItem} />
              </StoreContext.Provider>
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}






export default App;
