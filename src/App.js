import React, { Component } from 'react';
import store from './store'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import Home from './components/Home'
import SingleAD from './components/SingleAD'
import NewAdvertisement from './components/NewAdvertisement'
import Header from './components/Header'
import './App.css'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/advertisement/:id" component={SingleAD} />
          <Route path="/publishAd" component={NewAdvertisement} />
        </div>
      </Provider>
    );
  }
}

export default App;
