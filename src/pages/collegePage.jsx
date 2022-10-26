import React, { Component } from 'react';
import ProductCard from '../components/common/productCard';
import axios from 'axios'

class CollegePage extends Component {
    state={
        college:[]
    }
    
    async componentDidMount() { 
        const {data} = await axios.get('http://localhost:5000/api/products')
        this.setState({college:data.collegeProducts})
     } 

    render() {
        
         return (
            <div className='max-width-1200 col-12 col-md-12 col-lg-10 mx-auto my-5 px-5'>
            <h1>College Bags</h1>
            <div className='row justify-content-around'>
                {
                    this.state.college.map((product) => (
                        
                        <div key={product.title} className='col-10 col-sm-5 col-md-4 col-lg-3 '>
                        <ProductCard product={product}
                            handleAddCart={this.props.handleAddCart}/>
                    </div> 
                    ))
                }
            </div>
        </div>
        );
    }
}
 
export default CollegePage;