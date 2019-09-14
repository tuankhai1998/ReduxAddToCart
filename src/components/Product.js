import React from 'react';

function Product({ data, add }) {
    let onAddItemCart = (data) => {
        add(data, 1);
    }

    return (
        <div className="col-10 col-sm-6 col-lg-4 mx-auto my-3 store-item sweets" data-item={data.type}>
            <div className="card ">
                <div className="img-container">
                    <img src={`img/${data.image}`} className="card-img-top store-img" alt={data.name} />
                    <span
                        className="store-item-icon"
                        onClick={() => onAddItemCart(data)}
                    >
                        <i className="fas fa-shopping-cart" />
                    </span>
                </div>
                <div className="card-body">
                    <div className="card-text d-flex justify-content-between text-capitalize">
                        <h5 id="store-item-name">{data.name}</h5>
                        <h5 className="store-item-value">$ <strong id="store-item-price" className="font-weight-bold">{data.price}</strong></h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
