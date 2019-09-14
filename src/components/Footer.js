import React from 'react';

function Footer() {
    return (
        <div className="container-fluid ">
            <div className="row lightbox-container align-items-center">
                <div className="col-10 col-md-10 mx-auto text-right lightbox-holder">
                    <span className="lightbox-close"><i className="fas fa-window-close" /></span>
                    <div className="lightbox-item" />
                    <span className="lightbox-control btnLeft"><i className="fas fa-caret-left" /></span>
                    <span className="lightbox-control btnRight"><i className="fas fa-caret-right" /></span>
                </div>
            </div>
        </div>

    );
}

export default Footer;
