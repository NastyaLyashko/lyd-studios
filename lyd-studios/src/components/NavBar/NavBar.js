import './NavBar.css';
import logo from '../../images/logo.svg';
import logo_horiz from '../../images/text-logo-horiz.svg';
import elipse from '../../images/elipse.svg';

function NavBar () {
    return(
        <section className='navbar'>
            <div className='navbar__main-container'>
                <div className='navbar__links-container'>
                    <a className='navbar__logo-container' href='#LydStudios' >
                        <img className='navbar__logo' src={logo} />
                        <img className='navbar__logo-text' src={logo_horiz} />
                    </a>
                    <ul className='navbar__navigation' >
                        <li className='navbar__item'>
                            <img src={elipse} className='navbar__navigation-img' />
                            <a className='navbar__navigation-link' href='#WhatDoWeDo'>WHAT DO WE DO</a>
                        </li>
                        <li className='navbar__item'>
                            <img src={elipse} className='navbar__navigation-img' />
                            <a className='navbar__navigation-link' href='#HowDoWeDoIt'>HOW DO WE DO IT</a>
                        </li>
                        <li className='navbar__item'>
                            <img src={elipse} className='navbar__navigation-img' />
                            <a className='navbar__navigation-link' href='#WhyDoWeDoIt'>WHY DO WE DO IT</a>
                        </li>
                        <li className='navbar__item'>
                            <img src={elipse} className='navbar__navigation-img' />
                            <a className='navbar__navigation-link' href='#WhoWeAre'>WHO WE ARE</a>
                        </li>
                    </ul>
                </div>
                <div className='navbar__copyright-container' >
                    <p className='navbar__copyright'>&copy; Lyd Studios   Saint-Petersburg, Russia (2021)</p>
                    <p className='navbar__copyright-text'>All rights reserved. Our website services, content and products are for informational purposes only.</p>
                </div>
            </div>
        </section>
    )
}

export default NavBar;