import React from 'react';
import heroImg from '../images/deadlift.jpeg';
import Home from './Home';


const hero = () => {
    return (
        <div className='hero'>
            <img src={heroImg} alt="Deadlift barbell" className='hero__img' />
            <Home></Home>
        </div>
    )
}

export default hero