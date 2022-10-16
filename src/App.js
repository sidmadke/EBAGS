import './App.css';
import React, { Component } from 'react'
import Navbar from './components/navbar';
import Footer from './components/footer';
import Routes from './layout/routes';

class App extends Component {
  state = { 
    cart:[]
   } 

   handleAddCart=(newProduct)=>{
    const productExist = this.state.cart.find((item)=>item._id==newProduct._id)
    if(productExist){
      alert('Already in Cart')
    }
    else if(newProduct.stock<=0){
      alert('currently not in stock')
      return
    }
    else{
      newProduct.inCart = newProduct.inCart+1
      let products = this.state.cart
      products.push(newProduct)
      this.setState({cart:products})
    }
   }

   handleIncrement=(product)=>{
    if(product.inCart>=product.stock){
      alert('currently not in stock')
    }
    else{
      let found = this.state.cart.find(item => item._id==product._id)
      found.inCart = found.inCart+1
      this.setState({cart:this.state.cart})
    }
   }

   handleDecrement=(product)=>{
      let found = this.state.cart.find(item => item._id==product._id)
      found.inCart = found.inCart-1
      this.setState({cart:this.state.cart})
   }

   handleDelete=(product)=>{
    const newCart = this.state.cart.filter((item)=>item._id!=product._id)
    this.setState({cart:newCart})
   }

  render() { 
    return (
      <div className='vh-10 d-flex flex-column'>
      <Navbar />

      <Routes cart={this.state.cart} handleAddCart={this.handleAddCart} handleDelete={this.handleDelete} handleIncrement={this.handleIncrement} handleDecrement={this.handleDecrement}></Routes>
      
      <Footer />
    </div>
    );
  }
}
 
export default App;