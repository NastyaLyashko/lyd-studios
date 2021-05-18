import { NavLink } from 'react-router-dom';
import './Footer.css';
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
            <h2 className='footer__subtitle'>For further communication, please, contact us:</h2>
            <div className='footer__contacts' >
                <a href="https://telegram.im/@alexoswart" target="_blank">
                    <img className='footer__contacts-logo' src={telegram} alt=''  />
                </a>
                <a href="mailto:someone@example.com">
                    <img className='footer__contacts-logo' src={email} alt=''  />
                </a>
                <a href="https://api.whatsapp.com/send?phone=79111274967">
                    <img className='footer__contacts-logo' src={whatsapp} alt=''  />
                </a>
                <a href="mailto:someone@example.com">
                    <img className='footer__contacts-logo' src={scype} alt=''  />
                </a>
            </div>
            <img className='footer__line' src={line}/>
            <div className='footer__bottom-container'>
            <div className='footer__logo-container' >
                <img className='footer__logo' src={logo} />
                <img className='footer__logo-text' src={logo_horiz} />
                <ul className='footer__navigation' >

                </ul>
            </div>
            </div>
        </footer>
    )
}

export default Footer;