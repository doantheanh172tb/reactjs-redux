import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/List';
var {Provider} = require('react-redux');
const store = require('./storeConf');

ReactDOM.render(
    <Provider store={store}>
        <List/>
    </Provider>,
  document.getElementById('root')
);
