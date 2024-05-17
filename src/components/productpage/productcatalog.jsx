import React, { useState } from "react";
import ProductTile from './producttile';
import Navbar from '../Mainpage/Navbar/Navbar';
import './productcatalog.css'; // Import the CSS file

const ProductCatalog = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filter, setFilter] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;

    const renderTile = () => {
        return <ProductTile key={Math.random()} />;
    };

    let tiles = [];
    for (let i = 0; i < 24; i++) { // Assume there are 24 products for this example
        tiles.push(renderTile());
    }

    // Filter and search functionality (placeholders for now)
    const filteredTiles = tiles.filter(tile => {
        // Apply search and filter logic here
        return true; // Update this with actual logic
    });

    // Calculate the number of pages
    const totalPages = Math.ceil(filteredTiles.length / productsPerPage);

    // Get current products
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentTiles = filteredTiles.slice(indexOfFirstProduct, indexOfLastProduct);

    // Divide tiles into rows with four columns
    const rows = [];
    for (let i = 0; i < currentTiles.length; i += 4) {
        const rowTiles = currentTiles.slice(i, i + 4);
        rows.push(
            <div className="row" key={i}>
                {rowTiles}
            </div>
        );
    }

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    const handleSearchClick = () => {
        // Apply search logic here
        console.log('Search clicked with query:', searchQuery);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div>
            <Navbar />
            <div className="header-bar">
                <select className="filter-dropdown" value={filter} onChange={handleFilterChange}>
                    <option value="All">All</option>
                    <option value="Category1">Category1</option>
                    <option value="Category2">Category2</option>
                    <option value="Category3">Category3</option>
                </select>
                <div className="search-container">
                    <input 
                        type="text" 
                        className="search-bar" 
                        placeholder="Search..." 
                        value={searchQuery} 
                        onChange={handleSearchChange} 
                    />
                    <button className="search-button" onClick={handleSearchClick}>
                        Search
                    </button>
                </div>
            </div>
            <h2 style={{ color: "#44b09e", textAlign: "center" }}>Products</h2>
            <div className="underline" style={{ width: '61px', height: '6px', backgroundColor: '#44b09e', borderRadius: '9px', margin: '0 auto' }}></div>
            <br/>
            {rows}
            <div className="pagination">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        className={`page-button ${currentPage === index + 1 ? 'active' : ''}`}
                        onClick={() => handlePageChange(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ProductCatalog;
