import React, { Component } from 'react';
import ProductCard from '../components/common/productCard';
import CouchProducts from '../data/couchProducts'

class ProductPage extends Component {
    
    render() {
        return (
            <div className='max-width-1200 col-12 col-md-12 col-lg-10 mx-auto my-5 px-5'>
            <h1>{this.props.match.params.category}</h1>
            <div className='row justify-content-around'>
                {
                    CouchProducts.map((product) => (
                        
                        <div key={product.title} className='col-10 col-sm-5 col-md-4 col-lg-3 '>
                        <ProductCard image={product.image}
                            title={product.title} 
                            url={product.url}
                            price={product.price}
                            brand={product.brand}
                            rating={product.rating}
                            reviews={product.reviews}
                            description={product.description} />
                    </div>
                    ))
                }
            </div>
        </div>
        );
    }
}
 
export default ProductPage;