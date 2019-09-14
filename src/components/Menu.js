import React, { useState } from 'react';

function Menu({ filtertype, filerChange }) {
    const [buttonValue, setButtonValue] = useState('all');

    let onFilter = (event) => {
        // console.log(event.target);
        let filter = event.target.value;
        filtertype(filter);
        filerChange();
        setButtonValue(filter);
    }

    return (
        <div className="row">
            <div className=" col-lg-8 mx-auto d-flex justify-content-around my-2 sortBtn flex-wrap">
                <button
                    className={`btn btn-outline-secondary btn-black text-uppercase filter-btn m-2 ${buttonValue === 'all' ? 'active' : ''}`}
                    onClick={onFilter}
                    value="all"
                >
                    all
                </button>
                <button
                    className={`btn btn-outline-secondary btn-black text-uppercase filter-btn m-2 ${buttonValue === 'cakes' ? 'active' : ''}`}
                    onClick={onFilter}
                    value="cakes"
                >
                    cakes
                </button>
                <button
                    className={`btn btn-outline-secondary btn-black text-uppercase filter-btn m-2 ${buttonValue === 'cupcakes' ? 'active' : ''}`}
                    onClick={onFilter}
                    value="cupcakes"
                >
                    cupcakes
                </button>
                <button
                    className={`btn btn-outline-secondary btn-black text-uppercase filter-btn m-2 ${buttonValue === 'sweets' ? 'active' : ''}`}
                    onClick={onFilter}
                    value="sweets"
                >
                    sweets
                </button>
                <button
                    className={`btn btn-outline-secondary btn-black text-uppercase filter-btn m-2 ${buttonValue === 'doughnuts' ? 'active' : ''}`}
                    onClick={onFilter}
                    value="doughnuts"
                >
                    doughnuts
                </button>
            </div>
        </div>
    );
}

export default Menu;
