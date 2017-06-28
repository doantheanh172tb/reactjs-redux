const isAddingReducer = (isAdding = false, action) => {
    switch (action.type){
        case 'TOGGLE_IS_ADDING':
            return !isAdding;
        default:
            return isAdding;
    }
};

module.exports = isAddingReducer;
