import React, { Component } from "react";

class ProductFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: "",
            priceRange: "",
            // Add more filter options as needed
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // Pass filter criteria to parent component (ProductCatalog)
        this.props.onSubmit(this.state);
    }

    render() {
        return (
            <div>
                <h3>Filter Products</h3>
                <form onSubmit={this.handleSubmit}>
                    {/* Example filter options */}
                    <div>
                        <label>Category:</label>
                        <input type="text" name="category" value={this.state.category} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Price Range:</label>
                        <input type="text" name="priceRange" value={this.state.priceRange} onChange={this.handleChange} />
                    </div>
                    {/* Add more filter options as needed */}
                    <button type="submit">Apply Filters</button>
                </form>
            </div>
        );
    }
}

export default ProductFilter;
