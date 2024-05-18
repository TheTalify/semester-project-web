import React, { useState, useEffect } from "react";
import ProductTile from './producttile'
import Navbar from '../Mainpage/Navbar/Navbar'

const ProductCatalog = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
    // Check if the user is logged in by verifying the presence of a session token
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // Update the isLoggedIn state based on token presence
    }, []);

    const handleLogout = () => {
    // Handle logout action
    localStorage.removeItem("token");
    setIsLoggedIn(false); // Update the isLoggedIn state to false
    };
    const renderTile = () => {
        return <ProductTile key={Math.random()} />;
    };

    let tiles = [];
    for (let i = 0; i < 8; i++) {
        tiles.push(renderTile());
    }
    
    // Divide tiles into rows with three columns
    const rows = [];
    for (let i = 0; i < tiles.length; i += 3) {
        const rowTiles = tiles.slice(i, i + 3);
        rows.push(
            <div className="row" key={i}>
                {rowTiles}
            </div>
        );
    }

    return (
        <div>
            <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
            <h2 style={{ color: "#44b09e", textAlign: "center" }}>Products</h2>
            <div className="underline" style={{ width: '61px', height: '6px', backgroundColor: '#44b09e', borderRadius: '9px', margin: '0 auto' }}></div>
            {rows}
        </div>
    );
};

export default ProductCatalog;
