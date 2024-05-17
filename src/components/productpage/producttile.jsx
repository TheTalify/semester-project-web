import React from "react";
import Logo from "./images/products.png";
import './product.css';

const ProductTile = () => {
    return (
        <div className="col-md-3 mb-3">
            <div className="card product-card h-100">
                <img src={Logo} className="card-img-top img-fluid" alt="Product 1" />
                <hr />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">Product 1</h5>
                    <p className="card-text flex-grow-1">Description of Product 1</p>
                    <a href="#" className="btn mt-auto" style={{ backgroundColor: "#44B09E" }}>
                        View Details
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProductTile;
