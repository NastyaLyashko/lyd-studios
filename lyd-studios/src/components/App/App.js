import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import './App.css';
import Header from '../Header/Header';
import AboutStudio from '../AboutStudio/AboutStudio';
import Market from '../Market/Market';
import AboutUs from '../AboutUs/AboutUs';
import Video from '../Video/Video';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="App">
      <ScrollableAnchor id={'section0'} >
        <div><Header /></div>
      </ScrollableAnchor>
      <ScrollableAnchor id={'section1'} >
        <div><AboutStudio /></div>
      </ScrollableAnchor>
      <ScrollableAnchor id={'section2'} >
        <div><Video /></div>
      </ScrollableAnchor>
      <ScrollableAnchor id={'section3'} >
        <div><Market /></div>
      </ScrollableAnchor>
      <ScrollableAnchor id={'section4'} >
        <div><AboutUs /></div>
      </ScrollableAnchor>
      <Footer />
    </div>
  );
}

export default App;
