import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homePage';
import About from './pages/about';
import Contact from './pages/contact';
import Navbar from './components/navbar';
import Footer from './components/footer';


function App() {
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={HomePage} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
