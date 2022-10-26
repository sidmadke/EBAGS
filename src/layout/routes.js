import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import About from '../pages/about';
import Contact from '../pages/contact';
import LoginPage from '../pages/loginPage';
import RegisterPage from '../pages/registerPage';
import Cart from '../pages/cart';
import ProductDetailsPage from '../pages/productDetailsPage';
import TablePage from '../pages/tablePage';
import CampPage from '../pages/campPage';
import BedPage from '../pages/bedPage';
import ThoratPage from '../pages/thoratPage';
import CollegePage from '../pages/collegePage';
import HomePage from '../pages/homePage';

class Routes extends Component {
  state = {
    cart: this.props.cart,
    handleAddCart: this.props.handleAddCart
  }
  render() {
    return (
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={RegisterPage} />

        <Route path="/cart"><Cart cart={this.props.cart} handleDelete={this.props.handleDelete} handleIncrement={this.props.handleIncrement} handleDecrement={this.props.handleDecrement} /></Route>

        <Route path="/products/:category/:product" render={(props) => (
          <ProductDetailsPage category={props.match.params.category} product={props.match.params.product} cart={this.state.cart} handleAddCart={this.state.handleAddCart} />
        )} />

        <Route path="/products/college-section">
          <CollegePage handleAddCart={this.props.handleAddCart} />
        </Route>

        <Route path="/products/Thorat-section">
          <ThoratPage handleAddCart={this.props.handleAddCart} />
        </Route>

        <Route path="/products/table-section">
          <TablePage handleAddCart={this.props.handleAddCart} />
        </Route>

        <Route path="/products/bed-section">
          <BedPage handleAddCart={this.props.handleAddCart} />
        </Route>

        <Route path="/products/camp-section">
          <CampPage handleAddCart={this.props.handleAddCart} />
        </Route>

        <Route path="/" component={HomePage} />
      </Switch>
    );
  }
}

export default Routes;