import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Footer from '../components/footer';
import HomeCards from '../components/home.cards';
import HomeCarousal from '../components/home.carousal';


const HomePage = () => {
    return (
        <>
            <HomeCarousal />
            <div className='col-10 offset-1'>
                <HomeCards />
            </div>
        </>
    )
}

export default HomePage;