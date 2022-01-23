import './Logo.css';
import logo from '../../images/logo.svg';

export default function Logo({ darkTheme }) {

    return (
        <div className={`${darkTheme ? 'logo-container_dark' : ''} logo-container`}>
            <p className={`${darkTheme ? 'logo-text_dark' : ''} logo-text`} >LYD STUDIOS</p>
            <img className='logo-img' src={logo} alt='logo' />
        </div>
    )
}