import React, { useState } from 'react';


import './_Rainy.scss';

function Rainy() {
  const [drops, setDrops] = useState('');
  const [backdrops, setBackdrops] = useState('');
  const [isRaining, setIsRaining] = useState(false);

  const makeItRain = () => {
    let increment = 0;
    const drop = [];
    const backDrop = [];
    while (increment < 100) {
      // Random numbers for various randomizations
      // random number between 98 and 1
      const randoCent = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
      // random number between 5 and 2
      const randoCinq = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
      // increment
      increment += randoCinq;

      // add in a new raindrop with various randomizations to certain CSS properties
      drop.push(
        <div
          key={`${randoCent}-${randoCinq}-${Math.floor(Math.random() * (100))}`}
          className="drop"
          style={{
            left: `${increment}%`, bottom: `${randoCinq + randoCinq - 1 + 100}%`, animationDelay: `0.${randoCent}s`, animationDuration: `0.5${randoCent}s`,
          }}
        >
          <div className="stem" style={{ animationDelay: `0.${randoCent}s`, animationDuration: `0.5${randoCent}s` }} />
          <div className="splat" style={{ animationDelay: `0.${randoCent}s`, animationDuration: `0.5${randoCent}s` }} />
        </div>,
      );
      backDrop.push(
        <div
          key={`${randoCent}-${randoCinq}-${Math.floor(Math.random() * (1000))}`}
          className="drop"
          style={{
            right: `${increment}%`, bottom: `${(randoCinq + randoCinq - 1 + 100)}%`, animationDelay: `0.${randoCent}s`, animationDuration: `0.5${randoCent}s`,
          }}
        >
          <div className="stem" style={{ animationDelay: `0.${randoCent}s`, animationDuration: `0.5${randoCent}s` }} />
          <div className="splat" style={{ animationDelay: `0.${randoCent}s`, animationDuration: `0.5${randoCent}s` }} />
        </div>,
      );
    }
    setDrops(drop);
    setBackdrops(backDrop);
  };

  if (!isRaining) {
    makeItRain();
    setIsRaining(true);
  }

  return (
    <div id="rainy">
      <div className="rain front-row">
        {drops}
      </div>
      <div className="rain back-row">
        {backdrops}
      </div>
    </div>
  );
}

export default Rainy;
