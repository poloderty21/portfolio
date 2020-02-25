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
      <Header name="Xavier" />
      <Bio />
      <Portfolio />
      <Ligne />
      <Footer />
    </>
  );
}

export default App;
