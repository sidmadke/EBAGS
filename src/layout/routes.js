import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import About from '../pages/about';
import Contact from '../pages/contact';
import LoginPage from '../pages/loginPage';
import RegisterPage from '../pages/registerPage';
import Cart from '../pages/cart';
import ProductDetailsPage from '../pages/productDetailsPage';
import TablePage from '../pages/tablePage';
import ChairPage from '../pages/chairPage';
import BedPage from '../pages/bedPage';
import CupboardPage from '../pages/cupboardPage';
import CouchPage from '../pages/couchPage';
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

        <Route path="/products/couch-section">
          <CouchPage handleAddCart={this.props.handleAddCart} />
        </Route>

        <Route path="/products/cupboard-section">
          <CupboardPage handleAddCart={this.props.handleAddCart} />
        </Route>

        <Route path="/products/table-section">
          <TablePage handleAddCart={this.props.handleAddCart} />
        </Route>

        <Route path="/products/bed-section">
          <BedPage handleAddCart={this.props.handleAddCart} />
        </Route>

        <Route path="/products/chair-section">
          <ChairPage handleAddCart={this.props.handleAddCart} />
        </Route>

        <Route path="/" component={HomePage} />
      </Switch>
    );
  }
}

export default Routes;