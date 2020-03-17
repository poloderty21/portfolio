import React, { useState } from 'react';
import PropTypes from 'prop-types';

import VisibilitySensor from 'react-visibility-sensor';

// import {
//   Link,
// } from 'react-router-dom';


// import { Link } from 'react-router-dom';

import Header from './Header';
import Rainy from './Rainy';
import Bio from './Bio';
import Ligne from './Ligne';
import Portfolio from './Portfolio';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';


import './_Home.scss';

function Home({ numProj, precImg, nextImg }) {
  const [isRaining, setIsRaining] = useState(true);
  const [isVisible, setIsVisible] = useState(true);


  const onchangeHandle = (isVisible) => {
    // console.log(isVisible);
    setIsVisible(isVisible);
  };

  return (
    <>
      <VisibilitySensor onChange={onchangeHandle} partialVisibility>
        <Header onWeatherChange={() => setIsRaining(!isRaining)} isRaining={isRaining} />
      </VisibilitySensor>
      <Rainy isRaining={isRaining} />
      {/* <Link to="/users">Home</Link> */}
      <Bio />
      <Portfolio numProj={numProj} precImg={precImg} nextImg={nextImg} />
      <Ligne />
      <Footer />
      {!isVisible && <ScrollToTop /> }
    </>
  );
}

Home.propTypes = {
  numProj: PropTypes.number.isRequired,
  precImg: PropTypes.func.isRequired,
  nextImg: PropTypes.func.isRequired,
};

export default Home;
