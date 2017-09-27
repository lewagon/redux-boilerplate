// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import '../assets/stylesheets/application.scss';
import App from './components/app';

import dumbReducer from './reducers/dumb_reducer'

// State and reducers
const initialState = {
  // TODO: Define your Redux state and remove the `dumb` key.
  dumb: "Click me"
};
const reducers = combineReducers({
  // TODO: create and import a reducer for each redux state key. Remove dumb.
  dumb: dumbReducer
});

const middlewares = applyMiddleware(
  // TODO: import and list middlewares you want to use.
  // e.g.: logger, ReduxPromise, etc.
);

const store = createStore(reducers, initialState, middlewares);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('.container')
);

