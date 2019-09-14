import React from 'react';


function NavHeader({ totalprice, totalitem, showCart }) {

    let show = () => showCart

    return (
        <nav className="navbar navbar-expand-lg px-4">
            <button className="navbar-brand btn btn-outline-light " ><img src="img/logo.svg" alt="" /></button>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNav">
                <span className="toggler-icon"><i className="fas fa-bars" /></span>
            </button>
            <div className="collapse navbar-collapse" id="myNav">
                <ul className="navbar-nav mx-auto text-capitalize">
                    <li className="nav-item active mx-2">
                        <button className="btn btn-outline-light nav-link" >home</button>
                    </li>
                    <li className="nav-item mx-2">
                        <button className="btn btn-outline-light nav-link " >about</button>
                    </li>
                    <li className="nav-item mx-2">
                        <button className="btn btn-outline-light nav-link" >store</button>
                    </li>
                </ul>
                <div className="nav-info-items d-none d-lg-flex ">
                    <div className="nav-info align-items-center d-flex justify-content-between mx-lg-5">
                        <span className="info-icon mx-lg-3"><i className="fas fa-phone" /></span>
                        <p className="mb-0">+ 123 456 789</p>
                    </div>
                    <div
                        id="cart-info"
                        className="nav-info align-items-center cart-info d-flex justify-content-between mx-lg-5"
                        onClick={show()}
                    >
                        <span className="cart-info__icon mr-lg-3"><i className="fas fa-shopping-cart" /></span>
                        <p className="mb-0 text-capitalize"><span id="item-count">{totalitem}</span> items - $<span className="item-total">{totalprice}</span></p>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavHeader;
