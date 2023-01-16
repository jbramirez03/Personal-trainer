import React from 'react';
import heroImg from '../images/home.jpg';
import Home from './Home';


const hero = () => {
    return (
        <div className='hero'>
            <img src={heroImg} alt="hero image" className='hero__img' />
            <Home></Home>
        </div>
    )
}

export default hero