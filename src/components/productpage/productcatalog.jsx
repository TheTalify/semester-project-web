import React from "react";
import ProductTile from './producttile'
import Navbar from "../Homepage/Navbar";

const ProductCatalog = () => {
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
            <Navbar />
            <h2 style={{ color: "#44b09e", textAlign: "center" }}>Products</h2>
            <div className="underline" style={{ width: '61px', height: '6px', backgroundColor: '#44b09e', borderRadius: '9px', margin: '0 auto' }}></div>
            {rows}
        </div>
    );
};

export default ProductCatalog;
