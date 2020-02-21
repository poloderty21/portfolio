import React from 'react';
import Header from './Header';
import Bio from './Bio';
import Ligne from './Ligne';
import Portfolio from './Portfolio';
import Footer from './Footer';


import './_App.scss';

function App() {
  return (
    <>
      {/* <Header id="header" name="Xavier" />
      <Bio id="bio" />
      <Ligne /> */}
      <Portfolio id="portfo" />
      {/* <Footer id="foot" /> */}
    </>
  );
}

export default App;
