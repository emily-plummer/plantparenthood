import React from 'react';
import 'babel-polyfill';
import ReactDOM from 'react-dom';
import { Provider } from  'react-redux';
import fetch from 'cross-fetch';
import { routerMiddleware } from 'react-router-redux';
import { Router, Route, Switch } from 'react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import './index.css';
import App from './App';
import PlantList from './containers/PlantList';
import reducer, { actions } from './reducers';


export const history = createHistory();

const enhancers = [];
const middleware = [
  thunk,
  routerMiddleware(history)
];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const store = createStore(
  reducer,
  composedEnhancers
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
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/plants" component={PlantList}/>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
