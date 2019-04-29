import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router'
import * as serviceWorker from './serviceWorker';

import store from './stateMessage/index'
import { Provider } from 'react-redux'

// antd的全局中文设置start
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');
// antd的全局中文设置end
const App = (
  <LocaleProvider locale={zh_CN}>
    <Provider store={store}>
      <Router />
    </Provider>
  </LocaleProvider>
)

ReactDOM.render(App, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
