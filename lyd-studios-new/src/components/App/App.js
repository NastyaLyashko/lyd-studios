import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import './App.css';
import Header from '../Header/Header';
import AboutStudio from '../AboutStudio/AboutStudio';
import Market from '../Market/Market';
import AboutUs from '../AboutUs/AboutUs';
import Video from '../Video/Video';
import VideoPopup from '../VideoPopup/VideoPopup';
import Footer from '../Footer/Footer';

function App() {

  const [selectedVideo, setSelectedVideo] = React.useState(null);

  function handleVideoClick(video) {
      setSelectedVideo(video)
  }

  function closePopup() {
    setSelectedVideo(null)
}

  return (
    <div className="App">
      <ScrollableAnchor id={'LydStudios'} >
        <div><Header /></div>
      </ScrollableAnchor>
      <ScrollableAnchor id={'WhatDoWeDo'} >
        <div><AboutStudio /></div>
      </ScrollableAnchor>
      <ScrollableAnchor id={'HowDoWeDoIt'} >
        <div><Video onImgClick={handleVideoClick} /></div>
      </ScrollableAnchor>
      <ScrollableAnchor id={'WhyDoWeDoIt'} >
        <div><Market /></div>
      </ScrollableAnchor>
      <ScrollableAnchor id={'WhoWeAre'} >
        <div><AboutUs /></div>
      </ScrollableAnchor>
      <Footer />
      <VideoPopup video={selectedVideo}
                  onClose={closePopup} />
    </div>
  );
}

export default App;
