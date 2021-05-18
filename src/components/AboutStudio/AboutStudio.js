import './AboutStudio.css';
import logo from '../../images/logo.svg';
import line from '../../images/line.svg';
import logo_vert from '../../images/text-logo-vert.svg';
import studio_1 from '../../images/studio_1.png';
import studio_2 from '../../images/studio_2.png';
import studio_3 from '../../images/studio_3.png';

function AboutStudio () {
    return(
        <section className='about-studio'>
            <div className='about-studio__logo-container'>
                <img className='about-studio__logo' src={logo} alt='logo' />
                <img className='about-studio__logo-text' src={logo_vert} alt='logo'/>
            </div>
            <div className='about-studio__grid'>
                <img className='about-studio__line' src={line} />
                <img className='about-studio__studio-img' src={studio_1} />
                <p className='about-studio__studio-text'>We are a studio “NEED TO FUCKING COME UP” – a russian start-up, 
                    which offers an entire cycle of localization of educational content – for a russian-speaking audience. 
                    Be it translating, recording voice-over, or mastering sound – we got it covered.</p>
                <p className='about-studio__studio-text'>You get access to a vast, rapidly growing market and millions of potential consumers 
                    while retaining full rights for the content and the ability to use it as you please.</p>
                <img className='about-studio__studio-img' src={studio_2} />
                <img className='about-studio__studio-img' src={studio_3} />
                <p className='about-studio__studio-text'>Since this start-up is a new endeavor for us, 
                    and we’d like to develop our reputation as a trustworthy company creating high-quality content, 
                    we have a few very lucrative proposals. For instance, to demonstrate our capabilities, 
                    we offer to completely localize one lesson - absolutely for free. After that, 
                    you are free to decide whether you want to continue our partnership on a commercial basis.</p>
            </div>
        </section>
    )
}

export default AboutStudio;