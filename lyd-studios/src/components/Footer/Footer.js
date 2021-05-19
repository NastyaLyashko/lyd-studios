import './Footer.css';
import NavBar from '../NavBar/NavBar';
import telegram from '../../images/telegram.svg';
import email from '../../images/email.svg';
import whatsapp from '../../images/whatsapp.svg';
import scype from '../../images/scype.svg';
import logo from '../../images/logo.svg';
import logo_horiz from '../../images/text-logo-horiz.svg';
import line from '../../images/line.svg';

function Footer () {
    return(
        <footer className='footer'>
            <div className='footer__logo-container' >
                <img className='footer__logo-text' src={logo_horiz} />
                <img className='footer__logo' src={logo} />
            </div>
            <div className='footer__main-container'>
                <h2 className='footer__subtitle'>For further communication, please, contact us:</h2>
                <div className='footer__contacts' >
                    <a href="https://telegram.im/@alexoswart" target="_blank">
                        <img className='footer__contacts-logo' src={telegram} alt='Telergram'  />
                    </a>
                    <a href="mailto:someone@example.com">
                        <img className='footer__contacts-logo' src={email} alt='Email'  />
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=79111274967">
                        <img className='footer__contacts-logo' src={whatsapp} alt='WhatsApp'  />
                    </a>
                    <a href="mailto:someone@example.com">
                        <img className='footer__contacts-logo' src={scype} alt='Scype'  />
                    </a>
                </div>
                <img className='footer__line' src={line}/>
            </div>
            <NavBar />
        </footer>
    )
}

export default Footer;