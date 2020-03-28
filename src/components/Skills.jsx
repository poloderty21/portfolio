import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import skills from '../data/skills';

import './_Skills.scss';

function getDegValue(pourcent) {
  return (pourcent * 360) / 100;
}

function Skills() {
  return (
    <div id="skill-tree">
      <div id="skill-lang">
        {skills[0].map(({ name, pourcent, url }, id) => (
          <div key={name} className="skill">
            <ScrollAnimation animateIn="fade-in-top" animateOnce delay={id * 60 + 400} offset={50}>
              <div className="skill-container">
                <div className="skill-pourcent" style={{ backgroundImage: `linear-gradient(0deg, transparent 50%, #277b32 50%), linear-gradient(${getDegValue(pourcent)}deg, #277b32 50%, transparent 50%)` }}>
                  <div className="skill-logo">
                    <img src={url} alt="" />
                  </div>
                </div>
              </div>
              <span className="skill-title">{name}</span>
            </ScrollAnimation>
          </div>
        ))}
      </div>
      <div id="skill-logiciel">
        {skills[1].map(({ name, pourcent, url }, id) => (
          <div key={name} className="skill">
            <ScrollAnimation animateIn="fade-in-top" animateOnce delay={id * 60 + 400} offset={50}>
              <div className="skill-container">
                <div className="skill-pourcent" style={{ backgroundImage: `linear-gradient(0deg, transparent 50%, #277b32 50%), linear-gradient(${getDegValue(pourcent)}deg, #277b32 50%, transparent 50%)` }}>
                  <div className="skill-logo">
                    <img src={url} alt="" />
                  </div>
                </div>
              </div>
              <span className="skill-title">{name}</span>
            </ScrollAnimation>
          </div>
        ))}
      </div>
      <div id="skill-util">
        {skills[2].map(({ name, pourcent, url }, id) => (
          <div key={name} className="skill">
            <ScrollAnimation animateIn="fade-in-top" animateOnce delay={id * 60 + 400} offset={50}>

              <div className="skill-container">
                <div className="skill-pourcent" style={{ backgroundImage: `linear-gradient(0deg, transparent 50%, #277b32 50%), linear-gradient(${getDegValue(pourcent)}deg, #277b32 50%, transparent 50%)` }}>
                  <div className="skill-logo">
                    <img src={url} alt="" />
                  </div>
                </div>
              </div>
              <span className="skill-title">{name}</span>
            </ScrollAnimation>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
