import React, { useState } from 'react';
import Menu from './Menu';
import Search from './Search';
// import Product from './Product';

function Products({ children, filter }) {
    const [prevName,setPrevName] = useState('');
    const [prevType,setPrevType] = useState('all');

    let filterItem = {

    };

    let onFilterChange = () => {
        if (!filterItem.name) {
            if (prevName) {
                filterItem.name = prevName;
            }
            filterItem.name = '';

        }
        if (!filterItem.type) {
            if (prevType) {
                filterItem.type = prevType;
            }
           
        }
        console.log('prev',prevType,prevName);
        console.log('filter', filterItem.name, filterItem.type)
        filter(filterItem);
    }

    let filtertype = (filterType) => {
        console.log('filterType', filterType);
        filterItem.type = filterType;
        setPrevType(filterType);
        return filterType;
    }

    let filtername = (filterName) => {
        console.log('filterName', filterName);
        filterItem.name = filterName;
        setPrevName(filterName);
        return filterName;
    }

    return (
        <section id="store" className="store py-5">
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-sm-6 text-center">
                        <h1 className="text-capitalize">our <strong className="banner-title ">store</strong></h1>
                    </div>
                </div>
                <Menu filtertype={filtertype} filerChange={onFilterChange} />
                <Search filtername={filtername} filerChange={onFilterChange} />
                <div className="row" id="store-items">
                    {children}
                </div>
            </div>
        </section>
    );
}

export default Products;
// export default Products;
