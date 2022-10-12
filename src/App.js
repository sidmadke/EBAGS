import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homePage';
import About from './pages/about';
import Contact from './pages/contact';
import Navbar from './components/navbar';
import Footer from './components/footer';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';
import ProductPage from './pages/productPage';
import ProductDetailsPage from './pages/productDetailsPage';
import Cart from './pages/cart';


function App() {
  return (
    <div className='vh-10 d-flex flex-column'>
      <Navbar />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={RegisterPage} />
        <Route path="/cart" component={Cart} />
        <Route path="/product/:category/:product" component={ProductDetailsPage} />
        <Route path="/product/:category" component={ProductPage} />
        <Route path="/" component={HomePage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
