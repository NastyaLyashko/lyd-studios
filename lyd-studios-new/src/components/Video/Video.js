import React from 'react';
import './Video.css';
import logo from '../../images/logo.svg';
import logo_vert_white from '../../images/text-logo-vert_white.svg';
import line from '../../images/line.svg';
import Hadfield from '../../images/Hadfield.png';
import Lynch from '../../images/Lynch.png';
// import Photography from '../../images/PHOTOGRAPHY.png';

function Video ({ onImgClick }) {

    const video1 = {
        link: 'https://www.youtube.com/embed/zySDW_9at84',
        title: 'David Lynch Teaches Creativity and Film (Official trailer) [LYD Studios]',
    }

//    const video2 = {
//        link: 'https://www.youtube.com/embed/vhp7gxVKNAU',
//        title: 'Photography basics in 10 minutes (Fragment) [LYD Studios]',
//    } 

    const video3 = {
        link: 'https://www.youtube.com/embed/wQ58lt8XyGc',
        title: 'Astronaut Chris Hadfield Debunks Space Myths (Fragment) [LYD Studios]',
    }

    function handleClick(video) {
        onImgClick(video);
    }  

    return(
        <section className='video'>
            <div className='video__container' >
                <img className='video__line' src={line} alt='' />
                <div className='video__studio-container' >
                    <h2 className='video__title'>Here’s a video, showcasing our studio equipment.</h2>
                    <div className='video__youtube'>
                        <iframe className='video__iframe'
                                src="https://www.youtube.com/embed/vhp7gxVKNAU" 
                                title="YouTube video player" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen></iframe>
                    </div>
                    <p className='video__text'>We have professional gear installed and ready to use, which allows us to quickly deliver high-quality product.</p>
                </div>
                <div className='video__examples-container' >
                    <h3 className='video__subtitle'>Examples of our work:</h3>
                    <img className='video__img' src={Lynch} alt='' onClick={()=> handleClick(video1)}/>
                    <p className="video__caption">{video1.title}</p>
                    {/*   <img className='video__img' src={Photography} alt='' onClick={()=> handleClick(video2)}/> 
                    <p className="video__caption">{video2.title}</p> */}
                    <img className='video__img' src={Hadfield} alt='' onClick={()=> handleClick(video3)}/>
                    <p className="video__caption">{video3.title}</p>
                </div>
            </div>
            <div className='about-us__logo-container'>
                <img className='about-us__logo-text' src={logo_vert_white} alt='logo'/>
                <img className='about-us__logo' src={logo} alt='logo' />
            </div>
        </section>
    )
}

export default Video;