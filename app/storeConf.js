import { createStore, compose } from 'redux';
const reducer = require('./Reducers');

const store = createStore(reducer, compose(
    window.devToolsExtension? window.devToolsExtension(): f => f
));

module.exports = store;
