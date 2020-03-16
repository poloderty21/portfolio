import React from 'react';

import { animateScroll as scroll } from 'react-scroll';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';

import './_ScrollToTop.scss';

const scrollToTop = () => {
  scroll.scrollToTop({
    smooth: 'easeInOutQuad',
  });
};

function ScrollToTop() {
  return (
    <div id="scrollToTop" onClick={scrollToTop} className="slide-in-blurred-bottom">
      <FontAwesomeIcon icon={faArrowCircleUp} />
    </div>
  );
}

export default ScrollToTop;
