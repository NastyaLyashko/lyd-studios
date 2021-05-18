import React from 'react';
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
      <Header />
      <AboutStudio />
      <Video />
      <Market />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
