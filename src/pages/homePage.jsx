import React from 'react'
import Footer from '../components/footer';
import HomeCards from '../components/home.cards';
import HomeCarousal from '../components/home.carousal';
import Navbar from '../components/navbar';

const HomePage = () => {
  return (
    <div>
        <Navbar/>
        <h1>WoodWorks Shop</h1>
        <HomeCarousal/>
        <HomeCards/>
        <Footer/>
    </div>
  )
}

export default HomePage;