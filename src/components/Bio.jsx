import React from 'react';

import './_Bio.scss';

import barbueVert from '../media/Barbue-vert.png';

function Bio() {
  return (
    <section id="bio">
      <div id="presentation">
        <h3>Xavier Alexandre</h3>
        <img src={barbueVert} alt="Barbue sur rond au fond vert" />
        <h4>Intégrateur Web</h4>
        <h3>&</h3>
        <h4>Dev front-end</h4>
      </div>
      <div id="skills">
        <span>Html5</span>
        <span>Css3</span>
        <span>Git</span>
        <span>Sass</span>
        <span>ReactJs</span>
      </div>
    </section>
  );
}

export default Bio;
