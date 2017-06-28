import { combineReducers } from 'redux';
import isAdding from './isAddingReducer';
import list from './listReducer';

const reducer = combineReducers({
    list,
    isAdding
});

module.exports = reducer;
