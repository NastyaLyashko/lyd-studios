import './Video.css';
import logo from '../../images/logo.svg';
import logo_vert from '../../images/text-logo-vert.svg';

function Video () {
    return(
        <section className='video'>
            <div className='video__container' >
                <h2>Туть что-то о том, что, мол, ещё немного наглядной демонстрации нашего экипа, голосов и нищеты</h2>
                <iframe className='video__youtube' id="ytplayer" type="text/html" width="720" height="405" src="https://www.youtube.com/embed/BZsUo1KuMWU?start=3" frameborder="0" allowfullscreen></iframe>
                <p>Туть наш неебенный видос! Которого у нас пока нет, но это ведь совершенно ничего не значит, правильно?</p>
            </div>
            <div className='about-us__logo-container'>
                <img className='about-us__logo-text' src={logo_vert} alt='logo'/>
                <img className='about-us__logo' src={logo} alt='logo' />
            </div>
        </section>
    )
}

export default Video;