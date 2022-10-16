import React, { Component } from 'react'
import CategoryCard from './common/categorycard';
import axios from 'axios'

class HomeCards extends Component {
    state = {
        data:[]
    }

    async componentDidMount() {
        const {data} = await axios.get('http://localhost:5000/api/category')
        this.setState({data})
        
    }
    render() {
        return (<div className='max-width-900 col-12 col-md-12 col-lg-10 col-xxl-8 mx-auto my-5'>
            <div className='row justify-content-center'>
                {
                    this.state.data.map(category => (
                        <div key={category.title} className='col-10 col-sm-6 col-md-4 col-lg-4'>
                            <CategoryCard category={category} />
                        </div>
                    ))
                }
            </div>
        </div >);
    }
}

export default HomeCards;