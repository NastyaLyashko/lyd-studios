import React from 'react';
import './App.css';
import Header from '../Header/Header';
import About from '../About/About';
import Video from '../Video/Video';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Video />
      <Footer />
    </div>
  );
}

export default App;
