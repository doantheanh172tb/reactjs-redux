// import redux from 'redux';
import { createStore, combineReducers, compose } from 'redux';
const listReducer = (list = ['Android', 'iOS', 'Windows', 'NodeJS'], action) => {
    switch (action.type){
        case 'ADD_ITEM':
            return [...list, action.item];
        case 'REMOVE_ITEM':
            return list.filter((e, i) => i != action.index);
        default:
            return list;
    }
};

const isAddingReducer = (isAdding = false, action) => {
    switch (action.type){
        case 'TOGGLE_IS_ADDING':
            return !isAdding;
        default:
            return isAdding;
    }
};

const reducer = combineReducers({
    list: listReducer,
    isAdding: isAddingReducer
});

const store = createStore(reducer, compose(
   window.devToolsExtension? window.devToolsExtension(): f => f
));

store.dispatch({
    type: 'TOGGLE_IS_ADDING'
});

store.dispatch({
   type: 'ADD_ITEM',
    item: 'AAAA'
});

store.dispatch({
    type: 'REMOVE_ITEM',
    index: 1
});

module.exports = store;