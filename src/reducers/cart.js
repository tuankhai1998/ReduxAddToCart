import * as types from '../constants/ActionTypes';


var data = JSON.parse(localStorage.getItem('CART'));
var initialState = data ? data : [];

let getIndexOf = (state, id) => {
    for (var i = 0; i < state.length; i++) {
        if (state[i].product.id === id) {
            return i;
        }
    }
    return -1;

}


const cart = (state, actions) => {
    state = initialState;
    let id;
    let { product, quantity } = actions;
    let index = -1;

    switch (actions.type) {
        case types.ADD_TO_CART:
            id = product.id;
            index = getIndexOf(state, id);
            if (index === -1) {
                state.push({
                    product,
                    quantity
                })
            }
            else {
                state[index].quantity += quantity;
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        case types.REMOVE_ITEM_CART:
            id = product.id;
            index = getIndexOf(state, id);
            state.splice(index, 1);
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        case types.REMOVE_ALL_ITEM:
            state.splice(0, state.length);
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        default: return [...state];
    }
}

export default cart;