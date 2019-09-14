import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeItem, removeAllItem } from '../actions/index';


import Cart from '../components/Cart';
import ItemCart from '../components/ItemCart';



function CartContainers({ cart, showcart, removeItem, removeAllItem }) {
    let showItemCart = (allItem) => {
        if (allItem.length > 0) {
            return allItem.map((item, index) => <ItemCart key={index} data={item} remove={removeItem} />)
        }
        else {
            return <p>Không có sản phẩm nào.</p>
        }
    }
    let totalPrice = (allItem) => {
        if (allItem.length > 0)
            return allItem.reduce((sum, item1) => sum + item1.product.price * item1.quantity, 0);
        else
            return 0;
    }

    return (
        <Cart totalprice={totalPrice(cart)} showcart={showcart} removeAllItem={removeAllItem}>
            {showItemCart(cart)}
        </Cart>
    );


}


CartContainers.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            type: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
        }),
        quantity: PropTypes.number.isRequired
    })).isRequired
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        showcart: state.showcart
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        removeItem: (item) => {
            dispatch(removeItem(item))
        },
        removeAllItem: () => {
            dispatch(removeAllItem())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainers);
// export default Products;
