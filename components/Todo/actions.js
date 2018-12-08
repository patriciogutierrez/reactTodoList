//Acciones
import { ADD_ITEM, CHECK_ITEM, DELETE_LIST } from './types';

function addItem(item) {
    return {
        type: ADD_ITEM,
        newItem: item
    };
}

function checkItem(itemId) {
    return {
        type: CHECK_ITEM,
        id: itemId
    };
}
function deleteList(){
    return{
        type: DELETE_LIST
    }
}
const actionCreators = {
    addItem,
    checkItem,
    deleteList
};

export { actionCreators }
