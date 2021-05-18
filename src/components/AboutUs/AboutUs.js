import './AboutUs.css';
import logo from '../../images/logo.svg';
import line from '../../images/line.svg';
import logo_vert from '../../images/text-logo-vert.svg';
import portret_1 from '../../images/portret_1.png';
import portret_2 from '../../images/portret_2.svg';

function AboutUs () {
    return(
        <section className='about-us'>
            <div className='about-us__main-container'>
                <h3 className='about-us__title'>Our studio “YOUR MOMMA” was founded in Saint-Petersburg by Aleksei Radzhabov and Alexander Petrov, 
                        with additional help from professional sound designers, editors, and directors.</h3>
                <div className='about-us__portrets'>
                    <img className='about-us__portret' src={portret_2} alt='Aleksei Radzhabov' />
                    <img className='about-us__portret' src={portret_1} alt='Alexander Petrov'/>
                    <p className='about-us__portret-description'>Aleksei Radzhabov</p>
                    <p className='about-us__portret-description'>Alexander Petrov</p>
                </div>
                <img className='about-us__line' src={line}/>
                <div className='about-us__text-container'>
                    <p className='about-us__text'>We have more than 10 years of experience in working with sound, as well as on different radio stations. 
                            We are skilled in doing voice-over, recording various programs and podcasts. 
                            Aleksei and Alexander are winners and two-time nominees for a national award of the Russian Academy of Radio “Golden Microphone”.</p>
                    <p className='about-us__text'>We also have significant experience working with international business, culture, and sports specialists. 
                            For instance, we’ve collaborated with Global Director of Communications for Ferrari Antonio Ghini, 
                            a renowned musician Jacoby Shaddix from the “Papa Roach” band, two-times Copa America winning football player Julio Baptista and many others.</p>
                    <p className='about-us__text'>Alexander Petrov was also employed by “Gazprom-Media” to serve as an English language teacher and business coach. 
                        He is proficient in the language with a TOEFL C2 international certificate, which means he’s as good at it as any native speaker. 
                        Right now he is engaged part-time with an international educational company as a teacher of English as a foreign language.</p>
                </div>
            </div>
            <div className='about-us__logo-container'>
                <img className='about-us__logo-text' src={logo_vert} alt='logo'/>
                <img className='about-us__logo' src={logo} alt='logo' />
            </div>
        </section>
    )
}

export default AboutUs;