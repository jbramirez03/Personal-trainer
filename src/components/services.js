import React from 'react'
import service1 from '../images/pull-up.jpg'
import service2 from '../images/rope.jpg'
import service3 from '../images/running.jpg'
import service4 from '../images/situp.jpg'
import service5 from '../images/squat.jpg'

const Services = () => {
    return (
        <section id='services' className='container section services__section'>
            <h2 className="section__title section__title-center">Services</h2>

            <div className="services__images">
                <div className="img__block">
                    <img src={service1} alt="training service" />
                    <div className="text__box">
                        <p></p>
                    </div>
                </div>
                <div className="img__block">
                    <img src={service2} alt="training service" />
                    <div className="text__box">
                        <p></p>
                    </div>
                </div>
                <div className="img__block">
                    <img src={service3} alt="training service" />
                    <div className="text__box">
                        <p></p>
                    </div>
                </div>
                <div className="img__block">
                    <img src={service4} alt="training service" />
                    <div className="text__box">
                        <p></p>
                    </div>
                </div>
                <div className="img__block">
                    <img src={service5} alt="training service" />
                    <div className="text__box">
                        <p></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services