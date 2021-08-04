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
            <div className='about-studio__container'>
                <div className='about-studio__logo-container'>
                    <img className='about-studio__logo' src={logo} alt='logo' />
                    <img className='about-studio__logo-text' src={logo_vert} alt='logo'/>
                </div>
                <div className='about-studio__grid'>
                    <img className='about-studio__line' src={line} alt='' />
                    <img className='about-studio__studio-img' src={studio_1} alt='Our studio' />
                    <p className='about-studio__studio-text'>With a decade of experience, we are proficient in anything sound-related: 
                        from clearing up recorded audio, to doing voice-over in the first place.</p>
                    <p className='about-studio__studio-text'>We have multiple studios, which means we can work on several projects at once. 
                        Or finish one project much faster!</p>
                    <img className='about-studio__studio-img' src={studio_2}  alt='Our studio' />
                    <img className='about-studio__studio-img' src={studio_3}  alt='Our studio' />
                    <p className='about-studio__studio-text'>Even though we're new to localization business, we are by no means new to the whole process. 
                        Still, we are looking for long-term partners and are eager to offer highly lucrative options.</p>
                </div>
            </div>
        </section>
    )
}

export default AboutStudio;