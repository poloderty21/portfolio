import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import Home from './Home';

function App() {
  return (
    <Router>
      {/* <Link to="/users">Users</Link> */}
      <Switch>
        <Route path="/users">
          <p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, assumenda amet. Officia adipisci,
soluta laudantium aperiam
            <Link to="/">Home</Link>
            {' '}
cumque animi possimus ut pariatur officiis sint veritatis? Minima, incidunt assumenda. Culpa, ut.
          </p>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
