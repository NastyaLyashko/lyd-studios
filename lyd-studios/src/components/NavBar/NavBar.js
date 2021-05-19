import './NavBar.css';
import logo from '../../images/logo.svg';
import logo_horiz from '../../images/text-logo-horiz.svg';
import how from '../../images/how.svg';
import what from '../../images/what.svg';
import who from '../../images/who.svg';
import why from '../../images/why.svg';

function NavBar () {
    return(
        <section className='navbar'>
            <div className='navbar__main-container'>
                <div className='navbar__links-container'>
                    <a className='navbar__logo-container' href='#section0' >
                        <img className='navbar__logo' src={logo} />
                        <img className='navbar__logo-text' src={logo_horiz} />
                    </a>
                    <div className='navbar__navigation' >
                        <a className='navbar__navigation-link' href='#section1'>
                            <img src={what} className='navbar__navigation-img' />
                        </a>
                        <a className='navbar__navigation-link' href='#section2'>
                            <img src={how} className='navbar__navigation-img' />
                        </a>
                        <a className='navbar__navigation-link' href='#section3'>
                            <img src={why} className='navbar__navigation-img' />
                        </a>
                        <a className='navbar__navigation-link' href='#section4'>
                            <img src={who} className='navbar__navigation-img' />
                        </a>
                    </div>
                </div>
                <div className='navbar__copyright-container' >
                    <p>&copy; Lyd Studios   Saint-Petersburg, Russia (2021)</p>
                    <p  className='navbar__copyright-text'>All rights reserved. Our website services, content and products are for informational purposes only.</p>
                </div>
            </div>
        </section>
    )
}

export default NavBar;