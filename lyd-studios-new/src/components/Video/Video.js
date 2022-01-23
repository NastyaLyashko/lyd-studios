import React from 'react';
import './Video.css';
import Logo from '../Logo/Logo';
import Line from '../Line/Line';
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
                <div className='video__studio-container' >
                    <h2 className='video__title'>Here’s a video, showcasing our studio equipment.</h2>
                    <p className='video__text'>We have professional gear installed and ready to use, 
                    which allows us to quickly deliver high-quality product.</p>
                        <iframe className='video__iframe'
                            width="760"
                            height="430"
                            src="https://www.youtube.com/embed/vhp7gxVKNAU"
                            srcdoc="<style>*{padding:0;margin:0;overflow:hidden}
                            html,body{height:100%}
                            img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}
                            span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}
                            </style>
                            <a href=https://www.youtube.com/embed/vhp7gxVKNAU?autoplay=1>
                            <img src=https://img.youtube.com/vi/vhp7gxVKNAU/hqdefault.jpg alt='Demo video'>
                            <span>▶</span>
                            </a>"
                            frameborder="0"
                            title="Demo video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen></iframe>
                </div>
                <Line vertical={false} />
                <div className='video__examples-container' >
                    <h3 className='video__subtitle'>Examples of our work:</h3>
                    <div className='video__examples' >
                        <div className='video__video' >
                            <img className='video__img' src={Lynch} alt='' onClick={()=> handleClick(video1)}/>
                            <p className="video__caption">{video1.title}</p>
                        </div>
                        {/*   <img className='video__img' src={Photography} alt='' onClick={()=> handleClick(video2)}/> 
                        <p className="video__caption">{video2.title}</p> */}
                        <div className='video__video' >
                            <img className='video__img' src={Hadfield} alt='' onClick={()=> handleClick(video3)}/>
                            <p className="video__caption">{video3.title}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Logo darkTheme={false}/>
        </section>
    )
}

export default Video;