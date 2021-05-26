import './Video.css';
import logo from '../../images/logo.svg';
import logo_vert_white from '../../images/text-logo-vert_white.svg';

function Video () {
    return(
        <section className='video'>
            <div className='video__container' >
                <h2 className='video__title'>Here’s a video, showcasing our studio equipment.</h2>
                <iframe className='video__youtube' id="ytplayer" type="text/html" src="https://www.youtube.com/embed/vhp7gxVKNAU" frameborder="0" allowfullscreen></iframe>
                <p className='video__text'>We have professional gear installed and ready to use, which allows us to quickly deliver high-quality product.</p>
            </div>
            <div className='about-us__logo-container'>
                <img className='about-us__logo-text' src={logo_vert_white} alt='logo'/>
                <img className='about-us__logo' src={logo} alt='logo' />
            </div>
        </section>
    )
}

export default Video;