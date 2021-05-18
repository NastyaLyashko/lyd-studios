import './Market.css';
import logo from '../../images/logo.svg';
import line from '../../images/line.svg';
import logo_vert from '../../images/text-logo-vert.svg';
import studio_1 from '../../images/studio_1.png';
import studio_2 from '../../images/studio_2.png';
import studio_3 from '../../images/studio_3.png';

function Market () {
    return(
        <section className='about-studio'>
            <div className='about-studio__container'>
                <div className='about-studio__logo-container'>
                    <img className='about-studio__logo' src={logo} alt='logo' />
                    <img className='about-studio__logo-text' src={logo_vert} alt='logo'/>
                </div>
                <div className='about-studio__grid'>
                    <img className='about-studio__line' src={line} />
                    <p className='about-studio__studio-text'>In five years since 2016, the Russian online education market has grown by 300% and 
                        it will undoubtedly continue growing in the future. In particular, since 2016, Further, 
                        or Continuing education segment has grown from 7 to 11 billion roubles, that’s more than 50 million dollars spent on someone else’s product.</p>
                    <img className='about-studio__studio-img' src={studio_1} />
                    <img className='about-studio__studio-img' src={studio_2} />
                    <p className='about-studio__studio-text'>Additional school education has also grown, 
                        with its share in the total amount of money spent on education increasing from 3.6 billion roubles to 10, which is almost 90 million dollars. 
                        As it stands right now, 1/5th of revenue in russian education comes from online courses. 
                        Almost 3/4ths of such content are provided by different private companies.</p>
                    <p className='about-studio__studio-text'>This just goes to show that russian-speaking consumers are eager to spend their money on high-quality educational programs. 
                        There’s just one problem: a lot of said consumers can’t really speak or understand English at a sufficient level.</p>
                    <img className='about-studio__studio-img' src={studio_3} />
                </div>
            </div>
        </section>
    )
}

export default Market;