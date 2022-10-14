import React, { Component } from 'react';
import ProductCard from '../components/common/productCard';
import axios from 'axios'


class ChairPage extends Component {
    state={
        chair:[]
    }
    
    async componentDidMount() { 
        const {data} = await axios.get('http://localhost:5000/api/products')
        this.setState({chair:data.chairProducts})
     }
    render() {
        return (
            <div className='max-width-1200 col-12 col-md-12 col-lg-10 mx-auto my-5 px-5'>
            <h1>Chair Section</h1>
            <div className='row justify-content-around'>
                {
                    this.state.chair.map((product) => (
                        
                        <div key={product.title} className='col-10 col-sm-5 col-md-4 col-lg-3 '>
                        <ProductCard image={product.image}
                            title={product.title} 
                            url={product.url}
                            category={product.category}
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
 
export default ChairPage;