import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router'
import * as serviceWorker from './serviceWorker';

import store from './stateMessage/index'
import { Provider } from 'react-redux'

const App = (<Provider store={store}>
  <Router />
</Provider>)

ReactDOM.render(App, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
