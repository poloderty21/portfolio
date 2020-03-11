import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

import Header from './Header';
import Rainy from './Rainy';
import Bio from './Bio';
import Ligne from './Ligne';
import Portfolio from './Portfolio';
import Footer from './Footer';
import Contact from './Contact';


import './_Home.scss';

function Home() {
  const [isRaining, setIsRaining] = useState(true);
  return (
    <>
      <Header onWeatherChange={() => setIsRaining(!isRaining)} isRaining={isRaining} />
      <Rainy isRaining={isRaining} />
      
      {/* <Link to="/users">Home</Link> */}
      <Bio />
      <Portfolio />
      <Ligne />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
