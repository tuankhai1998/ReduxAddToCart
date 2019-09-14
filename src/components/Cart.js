import React from 'react';

function Cart({ children, totalprice, showcart, removeAllItem }) {
    let clearCart = () => removeAllItem();
    return (
        <div id="cart" className={`cart ${ showcart === true ? `show-cart` : ''}`}>
            {children}
            <div className="cart-total-container d-flex justify-content-around text-capitalize mt-5">
                <h5>total</h5>
                <h5> $ <strong id="cart-total" className="font-weight-bold">{totalprice}</strong> </h5>
            </div>
            <div className="cart-buttons-container mt-3 d-flex justify-content-between">
                <button id="clear-cart" onClick={clearCart} className="btn btn-outline-secondary btn-black text-uppercase">clear cart</button>
                <button className="btn btn-outline-secondary text-uppercase btn-pink">checkout</button>
            </div>
        </div>
    );
}

export default Cart;
