import React, { Component } from 'react';
import store from './store'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import Home from './components/Home'
import SingleAD from './components/SingleAD'
import NewAdvertisement from './components/NewAdvertisement'
import Menu from './components/Menu'
import AdminContainer from './components/admin/AdminContainer'

import './App.css'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Menu />
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/admin" exact component={AdminContainer} />
          <Route path="/advertisement/:id" component={SingleAD} />
          <Route path="/publishAd" component={NewAdvertisement} />
        </div>
      </Provider>
    );
  }
}

export default App;
