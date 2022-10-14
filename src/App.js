import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homePage';
import About from './pages/about';
import Contact from './pages/contact';
import Navbar from './components/navbar';
import Footer from './components/footer';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';
import ProductDetailsPage from './pages/productDetailsPage';
import Cart from './pages/cart';
import TablePage from './pages/tablePage';
import ChairPage from './pages/chairPage';
import BedPage from './pages/bedPage';
import CupboardPage from './pages/cupboardPage';
import CouchPage from './pages/couchPage';

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
        {/* <Route path="/product/:category" component={ProductPage} /> */}
        <Route path="/products/:category/:product" component={ProductDetailsPage} />
        <Route path="/products/table-section" component={TablePage} />
        <Route path="/products/chair-section" component={ChairPage} />
        <Route path="/products/bed-section" component={BedPage} />
        <Route path="/products/cupboard-section" component={CupboardPage} />
        <Route path="/products/couch-section" component={CouchPage} />
        
        <Route path="/" component={HomePage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
