import './Header.css';
import globus from '../../images/globus.svg';
import book from '../../images/book.svg';
import pc from '../../images/pc.svg';

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
            </div>
        </header>
    )
}

export default Header;