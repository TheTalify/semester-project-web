import React, { useState } from "react";
import './addproduct.css';

const AddProductPage = () => {
    const [productName, setProductName] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productImage, setProductImage] = useState(null);

    const handleProductNameChange = (e) => {
        setProductName(e.target.value);
    };

    const handleProductDescriptionChange = (e) => {
        setProductDescription(e.target.value);
    };

    const handleProductPriceChange = (e) => {
        setProductPrice(e.target.value);
    };

    const handleProductImageChange = (e) => {
        const file = e.target.files[0];
        setProductImage(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("productName", productName);
        formData.append("productDescription", productDescription);
        formData.append("productPrice", productPrice);
        formData.append("productImage", productImage);

        fetch("/api/products/add", {
            method: "POST",
            body: formData,
        })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.error(error);
        });
    };

    return (
        <div>
            <header>
                <h2>Add New Product</h2>
                <div className="underline"></div>
            </header>
            <div className="container mt-5 form-container">
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                        <label htmlFor="productName">Product Name</label>
                        <input type="text" className="form-control" id="productName" value={productName} onChange={handleProductNameChange} required />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="productDescription">Product Description</label>
                        <textarea className="form-control" id="productDescription" rows="3" value={productDescription} onChange={handleProductDescriptionChange} required></textarea>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="productPrice">Price</label>
                        <input type="text" className="form-control" id="productPrice" value={productPrice} onChange={handleProductPriceChange} required />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="productImage">Product Image</label>
                        <input type="file" className="form-control-file" id="productImage" accept="image/*" onChange={handleProductImageChange} required />
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary" style={{ backgroundColor: "#44b09e", borderColor: "#44b09e" }}>Add Product</button>
                </form>
            </div>
        </div>
    );
};

export default AddProductPage;
