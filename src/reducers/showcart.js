import * as types from '../constants/ActionTypes';

var initialState = false;

const showcart = (state = initialState, action) => {
    switch (action.type) {
        case types.SHOW_CART:
            state = !state;
            return state;
        default: return state;
    }
}

export default showcart;