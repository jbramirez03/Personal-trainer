import React from 'react'
import { Router, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


const Header = () => {

    const navLink = document.querySelectorAll('.nav__link')
    const [menuState, setMenuState] = React.useState(false);
    const [scrollState, setScrollState] = React.useState(false);

    function linkAction() {
        setMenuState(false);
    }
    navLink.forEach(n => n.addEventListener('click', linkAction))

    function scrollHeader() {
        if (this.scrollY >= 80) setScrollState(true);
        else setScrollState(false);
    }
    window.addEventListener('scroll', scrollHeader);


    return (
        <header className={`header ${scrollState ? 'scroll-header' : ''}`} id="header">
            <nav className="nav container">
                <a href="#" className="logo nav__logo"
                >Trainer</a>
                <div className={`nav__menu ${menuState ? ' show-menu' : ''}`} id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <HashLink to='#'
                                className={'nav__link'}
                            >Home</HashLink>
                        </li>
                        <li className="nav__item">
                            <HashLink to="#about"
                                className={'nav__link'}
                            >About</HashLink>
                        </li>
                        <li className="nav__item">
                            <HashLink to="#services" className={'nav__link'}>Services</HashLink>
                        </li>
                        <li className="nav__item">
                            <HashLink to="#contact" className={"nav__link"}>Contact</HashLink>
                        </li>
                        <li className="nav__item">
                            <Link to="/testimonials" className={"nav__link"}>Testimonials</Link>
                        </li>
                    </ul>

                    <i className="ri-close-line nav__close" id="nav-close" onClick={() => setMenuState(false)}></i>
                </div>

                <div className="nav__toggle" id="nav-toggle" onClick={() => setMenuState(true)}>
                    <i className="ri-function-line" ></i>
                </div>
            </nav>
        </header>
    )
}

export default Header