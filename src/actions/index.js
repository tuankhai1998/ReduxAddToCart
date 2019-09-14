import * as types from '../constants/ActionTypes';


export const addToCart = (product, quantity) => {
    return {
        type: types.ADD_TO_CART,
        product,
        quantity
    }
}

export const showCart = () => {
    return {
        type: types.SHOW_CART,
    }
}

export const removeItem = (product) => {
    return {
        type: types.REMOVE_ITEM_CART,
        product
    }
}

export const filterProduct = (filter) => {
    return {
        type: types.FILTER_PRODUCT,
        filter
    }
}

export const removeAllItem = () => {
    return {
        type: types.REMOVE_ALL_ITEM,
    }
}

