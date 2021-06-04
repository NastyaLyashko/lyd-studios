import './Footer.css';
import NavBar from '../NavBar/NavBar';
import telegram from '../../images/telegram.svg';
import email from '../../images/email.svg';
import whatsapp from '../../images/whatsapp.svg';
import logo_horiz from '../../images/text-logo-horiz_footer.png';
import line_horiz from '../../images/line-horiz.svg';

function Footer () {
    return(
        <footer className='footer'>
            <img className='footer__logo-text' src={logo_horiz}  alt='logo' />
            <div className='footer__main-container'>
                <h2 className='footer__subtitle'>For further communication, please, contact us:</h2>
                <div className='footer__contacts' >
                    <a href="https://telegram.im/@lydstudios" target="_blank" rel="noreferrer">
                        <img className='footer__contacts-logo' src={telegram} alt='Telergram'  />
                    </a>
                    <a href="mailto:info@lydstudios.com">
                        <img className='footer__contacts-logo' src={email} alt='Email'  />
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=79117650135">
                        <img className='footer__contacts-logo' src={whatsapp} alt='WhatsApp'  />
                    </a>
                </div>
                <img className='footer__line' src={line_horiz}  alt='logo' />
            </div>
            <NavBar />
        </footer>
    )
}

export default Footer;