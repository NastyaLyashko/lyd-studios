import './AboutUs.css';
import Line from '../Line/Line';
import portret_1 from '../../images/portret_1.png';
import portret_2 from '../../images/portret_2.png';
import Logo from '../Logo/Logo';

function AboutUs () {
    return(
        <section className='about-us'>
            <div className='about-us__main-container'>
                <h3 className='about-us__title'>“Lyd Studios” was founded in Saint-Petersburg by Aleksei Radzhabov and Alexander Petrov, 
                    with additional help from professional sound designers, editors, and directors.</h3>
                <div className='about-us__portrets'>
                    <img className='about-us__portret' src={portret_2} alt='Aleksei Radzhabov' />
                    <img className='about-us__portret' src={portret_1} alt='Alexander Petrov'/>
                    <div className='about-us__line'>
                        <Line vertical={false} />
                    </div>                    
                    <p className='about-us__portret-description'>Aleksei Radzhabov</p>
                    <p className='about-us__portret-description'>Alexander Petrov</p>
                </div>
                <div className='about-us__text-container'>
                    <p className='about-us__text'> We are skilled in doing voice-over, recording various programs and podcasts. 
                        Aleksei and Alexander are winners and two-time nominees for a national award of the Russian Academy of Radio “Golden Microphone”.</p>
                    <p className='about-us__text'>We have significant experience working with international business, culture, and sports specialists. 
                        Basically, listening to english language and adapting it for a russian audience has been their job for almost 10 years now.</p>
                    <p className='about-us__text'>Alexander Petrov was also employed by “Gazprom-Media” to serve as an English language teacher and business coach. 
                        He is proficient in the language and right now he is engaged part-time with an international educational company as a teacher of English as a foreign language.</p>
                </div>
            </div>
            <Logo darkTheme={false}/>
        </section>
    )
}

export default AboutUs;