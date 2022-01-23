import './Footer.css';
import NavBar from '../NavBar/NavBar';
import telegram from '../../images/telegram.svg';
import email from '../../images/email.svg';
import whatsapp from '../../images/whatsapp.svg';
import Line from '../Line/Line';

function Footer () {
    return(
        <footer className='footer'>
            <div className='footer__main-container'>
            <h3 className='footer__logo-text' >LYD STUDIOS</h3>
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
                <Line vertical={false} />
            </div>
            <NavBar />
        </footer>
    )
}

export default Footer;