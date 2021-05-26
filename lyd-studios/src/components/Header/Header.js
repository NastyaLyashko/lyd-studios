import './Header.css';
import telegram from '../../images/telegram.svg';
import email from '../../images/email.svg';
import whatsapp from '../../images/whatsapp.svg';
import scype from '../../images/scype.svg';
import logo from '../../images/logo.svg';
import logo_horiz from '../../images/text-logo-horiz.svg';
import notebook from '../../images/notebook.svg';

function Header () {
    return(
        <header className='header'>
            <div className='header__container'>
                <div className='header__logo-container' >
                    <h1 className='header__logo-text' src={logo_horiz}>LYD STUDIOS</h1>
                    <img className='header__logo' src={logo} />
                    <hr className='header__line header__line_orange'></hr>
                </div>
                <p className='header__quote'>If you talk to a man in his language, you can get to his heart.<br />
                        <span className='header__quote-author'>(Nelson Mandela)</span></p>
                <div  className='header__main-container'>
                    <p className='header__text'>Саня хотел тут какой-то текст, что-то про “мы студия перевода и озвучки из СПб”</p>
                    <img className='header__img' src={notebook} />
                </div>
                <hr className='header__line header__line_blue'></hr>
                <div className='header__contacts' >
                    <a href="https://telegram.im/@alexoswart" target="_blank">
                        <img className='header__contacts-logo' src={telegram} alt=''  />
                    </a>
                    <a href="mailto:someone@example.com">
                        <img className='header__contacts-logo' src={email} alt=''  />
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=79111274967">
                        <img className='header__contacts-logo' src={whatsapp} alt=''  />
                    </a>
                    <a href="mailto:someone@example.com">
                        <img className='header__contacts-logo' src={scype} alt=''  />
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header;