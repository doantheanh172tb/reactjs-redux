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

module.exports = listReducer;
