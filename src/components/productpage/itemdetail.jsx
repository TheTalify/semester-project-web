import React, { useState } from "react";
import Logo from "./images/products.png";
import "./itemdetail.css";
import Navbar from "../Homepage/Navbar";

const ProductDescription = () => {
    const [quantity, setQuantity] = useState(1);

    const decrementQuantity = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    return (
        <>
            <header>
                <Navbar />
                <h1>Product Description</h1>
                <div className="underline" style={{ width: '61px', height: '6px', backgroundColor: '#44b09e', borderRadius: '9px', margin: '0 auto' }}></div>
            </header>
            <div className="product-description-container">
                <div className="product-description-content">
                    {/* Product image */}
                    <div className="product-image">
                        <img src={Logo} alt="Product" />
                    </div>
                    {/* Product details */}
                    <div className="product-details">
                        <h2>Smart Fitness Tracker</h2>
                        <p> Description: The Smart Fitness Tracker is your ultimate companion for tracking your health and fitness goals. With its sleek design and advanced features, this fitness tracker helps you stay motivated and on track with your fitness journey.
                            <br />
                            <br />
                            Key Features:
                            <br />
                            - <strong>Heart Rate Monitoring:</strong> Monitor your heart rate in real-time to optimize your workouts and track your overall heart health.
                            <br />
                            - <strong>Activity Tracking:</strong> Keep track of your steps, distance traveled, and calories burned throughout the day to stay active and achieve your fitness goals.
                            <br />
                            - <strong>Sleep Monitoring:</strong> Analyze your sleep patterns and receive insights into your sleep quality to ensure you get the rest you need for optimal performance.
                            <br />
                            - <strong>Smart Notifications:</strong> Receive notifications for calls, messages, and app alerts directly on your wrist, so you never miss an important update while staying focused on your goals.
                            <br />
                            - <strong>Waterproof Design:</strong> With its waterproof design, you can wear the fitness tracker in the shower, while swimming, or during intense workouts without worry.
                            <br />
                            <br />
                            The Smart Fitness Tracker is compatible with both iOS and Android devices, allowing you to sync your data effortlessly and access detailed insights through the companion app. Take control of your health and fitness journey with the Smart Fitness Tracker today!</p>
                        <p>Price: $XX.XX</p>
                        {/* Quantity selector */}
                        <div className="quantity-selector">
                            <button className="quantity-btn" onClick={decrementQuantity}>-</button>
                            <input type="number" id="quantity" name="quantity" value={quantity} readOnly />
                            <button className="quantity-btn" onClick={incrementQuantity}>+</button>
                        </div>
                        {/* Add to cart button */}
                        <button className="add-to-cart-btn">Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDescription;
