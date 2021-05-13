import './Header.css';
import globus from '../../images/globus.svg';
import book from '../../images/book.svg';
import pc from '../../images/pc.svg';
import telegram from '../../images/telegram.svg';
import email from '../../images/email.svg';
import phone from '../../images/phone.svg';

function Header () {
    return(
        <header className='header'>
            <div className='header__container' >
                <div className='header__images'>
                    <img className='header__image' src={globus} alt='' />
                    <img className='header__image' src={pc} alt='' />
                    <img className='header__image' src={book} alt='' />
                </div>
            </div>
            <div className='header__main' >
                <div className='header__logo-container' >
                    <h1 className='header__title' >YOUR MOMMA</h1>
                    <img className='header__logo' ></img>
                </div>
                <h2 className='header__subtitle' >ебанись, какой пафосный слоган!</h2>
                <div className='header__contacts' >
                    <a href="https://telegram.im/@alexoswart" target="_blank">
                        <img className='header__contacts-logo' src={telegram} alt=''  />
                    </a>
                    <a href="mailto:someone@example.com">
                    <img className='header__contacts-logo' src={email} alt=''  />
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=79111274967">
                    <img className='header__contacts-logo' src={phone} alt=''  />
                    </a>
                </div>
            </div>

        </header>
    )
}

export default Header;