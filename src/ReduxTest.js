import React, { Component } from 'react'
import App from './Components/App'
import PhotoGrid from './Components/PhotoGrid'
import Single from './Components/Single'
import {Route, HashRouter as Router} from 'react-router-dom'
import { Provider } from 'react-redux'
import store, { history } from './store'
import './App.css';

class ReduxTest extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    )
  }
}

export default ReduxTest;
