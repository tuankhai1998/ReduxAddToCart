import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showCart } from '../actions/index';

import NavHeader from '../components/Header_nav';



function NavHeaderContainers({ cart, showCart }) {

    let totalPrice = (allItem) => {
        if (allItem.length > 0)
            return allItem.reduce((sum, item1) => sum + item1.product.price * item1.quantity, 0);
        else
            return 0;
    }

    return (
        <NavHeader totalprice={totalPrice(cart)} totalitem={cart.length} showCart={showCart} />
    );


}


NavHeaderContainers.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            type: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
        }),
        quantity: PropTypes.number.isRequired
    })).isRequired,
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        showCart: () => {
            dispatch(showCart())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavHeaderContainers);
// export default Products;
