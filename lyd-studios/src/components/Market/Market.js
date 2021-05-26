import './Market.css';
import logo from '../../images/logo.svg';
import logo_vert from '../../images/text-logo-vert.svg';
import market_1 from '../../images/market_1.png';
import market_2 from '../../images/market_2.png';

function Market () {
    return(
        <section className='market'>
            <div className='market__main-container'>
                <div className='market__logo-container'>
                    <img className='market__logo' src={logo} alt='logo' />
                    <img className='market__logo-text' src={logo_vert} alt='logo'/>
                </div>
                <div className='market__text-container' >
                    <p className='market__text'>In five years russian online education market has grown by 300%, and the experts unanimously agree that it will continue to grow in the years to come. 
                        Even now there are billions of dollars being made by various platforms operating in Russia. 
                        More specifically, last year russian people spent 11 billion on online further education and 10 billion on additional school education.</p>
                    <p className='market__text'>The largest russian online platforms offer their students hundreds of different courses - from “searching for the meaning of life” to “international marketing”. 
                        One website, offering IT courses, has already brought more than 4 million users, hundreds of thousands study daily on different platforms. 
                        It is safe to say that 20% of russian education market accounts for online courses, 80% of which are owned by private companies.</p>
                    <p className='market__text'>At the same time, russian people prefer being educated in their language. After analyzing incoming traffic on the “Coursera” website, 
                        with more than 300 000 users, it became apparent that 50% of people purchase courses in russian. The thing is - there are only 200 of those there. With our help, 
                        you can tap into that customer base.</p>
                    <p className='market__text'>Russian-speaking students are actively searching for high-quality online education, but their efforts are hampered by the lack of localized courses. 
                        “Lyd Studios” offers a partnership that can remedy the content drought felt by many russian-speaking customers.</p>
                    <div className='market__img-container' >
                        <img src={market_1} />
                        <img src={market_2} />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Market;