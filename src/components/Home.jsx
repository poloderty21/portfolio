import React from 'react';
// import { Link } from 'react-router-dom';

import Header from './Header';
import Rainy from './Rainy';
import Bio from './Bio';
import Ligne from './Ligne';
import Portfolio from './Portfolio';
import Footer from './Footer';

import './_Home.scss';

function Home() {
  return (
    <>
      <Header name="Xavier" />
      <Rainy />
      {/* <Link to="/users">Home</Link> */}
      <Bio />
      <Portfolio />
      <Ligne />
      <Footer />
    </>
  );
}

export default Home;
