import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from  'react-redux';
import reducer, { actions } from './reducers';
import thunk from 'redux-thunk';
import fetch from 'cross-fetch';
import 'babel-polyfill';

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);


function initializeApp() {
  return function (dispatch) {
    return fetch('https://sheltered-ocean-84444.herokuapp.com/plants', { method: 'GET', mode: 'no-cors'})
      .then(
        response => response.json(),
        error => console.log('an error occured', error)
      )
      .then(plants =>
          dispatch(actions.handleAppInit(plants))
      );
  };
};

store.dispatch(initializeApp());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
