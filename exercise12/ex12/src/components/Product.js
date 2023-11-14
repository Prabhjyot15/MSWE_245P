import React, { Component } from "react";

class Product extends Component {
    constructor() {
        super();
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <span >
                </span>
                Book : {this.props.product.name}
                <p>
        Research URL: <a className="btn btn-success" target="_blank" href={this.props.product.url}> Purchase Online</a>
        </p>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.product.count === 0 ? "warning" : "primary";
        return classes;
    }
}

export default Product;
