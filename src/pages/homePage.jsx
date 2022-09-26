import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Footer from '../components/footer';
import HomeCards from '../components/home.cards';
import HomeCarousal from '../components/home.carousal';
import Navbar from '../components/navbar';
import About from './about';
import Contact from './contact';

const HomePage = () => {
    return (
        <div>
            
            
            <h1>WoodWorks Shop</h1>
            <HomeCarousal />
            <HomeCards />
            
        </div>
    )
}

export default HomePage;