import React, { Component } from 'react'
import HomeDash from './components/home'
import { Switch, Route, Router, Redirect } from 'react-router-dom'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import Register from './components/Register'
import dashReducer from './components/reducer'
import './css/bootstrap.css'
import './css/App.css'
import './css/base.css'

const reducers = combineReducers({ dashReducer })
const store = applyMiddleware(thunk)(createStore)(reducers);

const createBrowserHistory = require("history").createBrowserHistory;

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <Router history={history}>
          <Switch>
            <Route
              exact path="/" component={HomeDash}
            />
            <Route
              path="/register" component={Register}
            />

            <Redirect
              path="*" to="/"
            />
          </Switch>
        </Router>
      </Provider>
    )
  }

}

export const history = createBrowserHistory()
export default App;
