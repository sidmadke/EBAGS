import React, { Component } from 'react'

class ProductDetailsPage extends Component {
    render() { 
        return (
            <div>
                <h1>{this.props.match.params.product}</h1>
            </div>
        );
    }
}
 
export default ProductDetailsPage;