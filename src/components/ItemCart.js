import React from 'react';
// import { removeItem } from '../actions';


function ItemCart({ data, remove }) {
    let removeItem = (item) => remove(item);
    return (
        <div className="cart-item d-flex justify-content-between text-capitalize my-3">
            <img src={`img-cart/${data.product.image}`} className="img-fluid rounded-circle" id="item-img" alt="" />
            <p className="cart-item-quantity">{data.quantity}</p>
            <div className="item-text">
                <p id="cart-item-title" className="font-weight-bold mb-0">{data.product.name}</p>
                <span>$</span>
                <span id="cart-item-price" className="cart-item-price">{data.product.price}</span>
            </div>
            <button
                id="cart-item-remove"
                className="cart-item-remove btn btn-outline-light"
                onClick={() => removeItem(data.product)}
            >
                <i className="fas fa-trash" />
            </button>
        </div>
    );
}

export default ItemCart;
