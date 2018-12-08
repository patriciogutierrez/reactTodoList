import { ADD_ITEM, CHECK_ITEM, DELETE_LIST } from './types';
let id = 0;
const initialState = {
    items:[]
}

function addItemToList(state, newItem) {
    return {
        ...state,
        items: [...state.items, { color: 'red', estado: false, todo: newItem, id: ++id }]
    }
}

function applyDeleteList(state){
    state.items.splice(0, state.items.length);
    return {
        ...state,
        items:[...state.items]
    }
}


function applyCheckItem(state, id) {
    let index = state.items.map(x => {
        return x.id
    }).indexOf(id)
    let setColor = 'red';
    if (!state.items[index].estado) {
        setColor = 'blue';
    }
    state.items[index].estado = !state.items[index].estado;
    state.items[index].color = setColor;
    return {
        ...state,
        items: [...state.items]
    }
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM:
            return addItemToList(state, action.newItem);
        case CHECK_ITEM:
            return applyCheckItem(state, action.id);
        case DELETE_LIST:
            return applyDeleteList(state);
        default:
            return state;
    }
}

export default reducer;