import React from 'react';
import ReactDOM from 'react-dom';
import {createBrowserHistory} from 'history';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './reducers';
import {Router, Route, Switch} from 'react-router-dom'
import './index.css';
import App from './App';
import Home from './views/Home';


const hist = createBrowserHistory();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
  <Router history={hist}>
  <Switch>
  <Route path="/" component={Home}/>
    </Switch>
    </Router>
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
