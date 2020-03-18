import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
import {
  faGithubSquare, faFacebookSquare, faLinkedin, faReact,
} from '@fortawesome/free-brands-svg-icons';
import ScrollAnimation from 'react-animate-on-scroll';
import { animateScroll as scroll } from 'react-scroll';

import './_Footer.scss';

function Footer() {
  const [isDependOpen, setDependOpening] = useState(false);

  const scrollToBottom = () => {
    scroll.scrollToBottom({
      smooth: 'easeInOutQuad',
      duration: 800,
    });
  };

  return (
    <footer>
      <div id="footer">
        <div id="divReseau">
          <a href="https://www.facebook.com/xavier.alexandre.1994" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookSquare} /></a>
          <a href="https://www.linkedin.com/in/xavier-alexandre-a735441a3/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="https://github.com/poloderty21" aria-label="Github" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithubSquare} /></a>
        </div>
        <div id="btnFold" tabIndex={0} role="button" type="button" aria-label="Open" onClick={() => { setDependOpening(!isDependOpen); scrollToBottom(); }}>
              Un site réalisé avec
          {' '}
          <FontAwesomeIcon icon={faReact} />
          {' '}
              React
          {' '}
          <span className="arrowOpen">{isDependOpen ? <FontAwesomeIcon icon={faSortUp} /> : <FontAwesomeIcon icon={faSortDown} />}</span>
          {isDependOpen && (
          <ScrollAnimation animateIn="fade-in-bottom" offset={0}>
            <div id="foldList">
              <ul>
                <li>
                  <span>react: </span>
                  <span>^16.12.0</span>
                </li>
                <li>
                  <span>react-dom: </span>
                  <span>^16.12.0</span>
                </li>
                <li>
                  <span>react-router-dom: </span>
                  <span>^5.1.2</span>
                </li>
                <li>
                  <span>react-scripts: </span>
                  <span>3.3.0</span>
                </li>
                <li>
                  <span>yup: </span>
                  <span>^0.28.3</span>
                </li>
                <li>
                  <span>formik: </span>
                  <span>^2.1.4</span>
                </li>
                <li>
                  <span>emailjs-com: </span>
                  <span>^2.4.1</span>
                </li>
                <li>
                  <span>node-sass: </span>
                  <span>^4.13.1</span>
                </li>
                <li>
                  <span>prop-types: </span>
                  <span>^15.7.2</span>
                </li>
                <li>
                  <span>@fortawesome/react-fontawesome: </span>
                  <span>^0.1.8</span>
                </li>
                <li>
                  <span>@fortawesome/fontawesome-svg-core: </span>
                  <span>^1.2.27</span>
                </li>
                <li>
                  <span>@fortawesome/free-solid-svg-icons: </span>
                  <span>^5.12.1</span>
                </li>
              </ul>
            </div>
          </ScrollAnimation>
          )}
        </div>
        <p className="copyright">&copy; 2020 Xavier Alexandre</p>
        <p className="petitMot">Fait avec ♥ à MTL</p>
      </div>
    </footer>
  );
}


export default Footer;
