import React from 'react'
import aboutImg from '../images/body.jpg';

const About = () => {
    return (
        <section className='section container about__section' id='about'>
            <h2 className="section__title section__title-center">About</h2>

            <div className="about__content">

                <div className="about__information">
                    <h3 className='about__title'>About Our Mission...</h3>
                    <p className="about__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.              </p>
                </div>
                <img className='about__image' src={aboutImg} alt="Guy flexing abs" />
            </div>
        </section>
    )
}

export default About                      