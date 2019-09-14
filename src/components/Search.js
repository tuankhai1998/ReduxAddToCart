import React from 'react';

function Search({ filtername, filerChange }) {

    let onfilter = (event) => {
        let filter = event.target.value; 
        filtername(filter);
        filerChange(filter);
    }

    return (
        <div className="row">
            <div className="col-10 mx-auto col-md-6">
                <form>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend ">
                            <span className="input-group-text search-box" id="search-icon"><i className="fas fa-search" /></span>
                        </div>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="item...."
                            id="search-item"
                            onChange={onfilter}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Search;
