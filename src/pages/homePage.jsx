import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Footer from '../components/footer';
import HomeCards from '../components/home.cards';
import HomeCarousal from '../components/home.carousal';


const HomePage = () => {
    return (
        <div>


            <h1>WoodWorks </h1>
            <HomeCarousal />
            <HomeCards />

        </div>
    )
}

export default HomePage;