import React, { Component } from "react";
import Product from "./Product";


class Products extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                {this.props.products.map(product => (
                    <Product
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        );
    }
}

export default Products;