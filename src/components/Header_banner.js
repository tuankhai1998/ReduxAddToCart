import React from 'react';
import CartContainer from '../containers/CartContainer';


function Banner() {
    return (
        <div className="container-fluid">
            <div className="row max-height justify-content-center align-items-center">
                <div className="col-10 mx-auto banner text-center">
                    <h1 className="text-capitalize">welcome to <strong className="banner-title ">grandma's</strong></h1>
                    <button href="#store" className="btn btn-outline-secondary banner-link text-uppercase my-2">explore</button>
                </div>
                <CartContainer />

            </div>
        </div>
    );
}

export default Banner;
