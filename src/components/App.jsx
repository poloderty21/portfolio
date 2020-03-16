import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import Home from './Home';
import Projet from './Projet';

import Projets from '../data/projets';


function App() {
  const [numProj, setNumProj] = useState(0);

  const precImg = (e) => {
    e.preventDefault();
    const numProchainProj = (numProj - 1) < 0 ? Projets.length - 1 : numProj - 1;
    setNumProj(numProchainProj);
  };
  const nextImg = (e) => {
    e.preventDefault();
    const numProchainProj = (numProj + 1) === Projets.length ? 0 : numProj + 1;
    setNumProj(numProchainProj);
  };

  return (
    <Router>
      <Switch>
        <Route path="/projet">
          <Link to="/">Home</Link>
          <Projet numProj={numProj} />
        </Route>
        <Route path="/">
          <Home numProj={numProj} precImg={precImg} nextImg={nextImg} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
