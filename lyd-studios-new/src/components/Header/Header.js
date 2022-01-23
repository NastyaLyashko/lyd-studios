import './Header.css';
import telegram from '../../images/telegram.svg';
import email from '../../images/email.svg';
import whatsapp from '../../images/whatsapp.svg';
import logo from '../../images/logo.svg';
import notebook from '../../images/notebook.svg';

function Header () {
    return(
        <header className='header'>
            <div className='header__container'>
                <div className='header__logo-container' >
                    <h1 className='header__logo-text' >LYD STUDIOS</h1>
                    <img className='header__logo' src={logo}  alt='logo' />
                    <hr className='header__line header__line_orange'></hr>
                </div>
                <p className='header__quote'>If you talk to a man in his language, you can get to his heart.<br />
                        <span className='header__quote-author'>(Nelson Mandela)</span></p>
                <img className='header__img' src={notebook}  alt='' />
                <hr className='header__line header__line_blue'></hr>
                <div className='header__contacts' >
                    <a href="https://telegram.im/@lydstudios" target="_blank" rel="noreferrer">
                        <img className='header__contacts-logo' src={telegram} alt='telegram'  />
                    </a>
                    <a href="mailto:info@lydstudios.com">
                        <img className='header__contacts-logo' src={email} alt='email'  />
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=79117650135">
                        <img className='header__contacts-logo' src={whatsapp} alt='whatsapp'  />
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header;