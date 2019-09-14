import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addToCart, filterProduct } from '../actions/index';



import Products from '../components/Products';
import Product from '../components/Product';
// import Search from '../components/Search';





function ProductContainers({ products, addToCart, filterProduct }) {

    var showProduct = (products) => {
        if (products.length > 0) {
            return products.map((product, index) => <Product key={index} data={product} add={addToCart} />)
        } else {
            return <p>Không có sản phẩm nào</p>;
        }
    }

    return (
        <Products filter={filterProduct}>
            {showProduct(products)}
        </Products>

    );
}


ProductContainers.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            type: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
        })
    ).isRequired
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        addToCart: (product, quantity) => {
            dispatch(addToCart(product, quantity))
        },

        filterProduct: (filter) => {
            // console.log(filter);
            dispatch(filterProduct(filter))
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainers);
// export default Products;
