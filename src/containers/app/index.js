import React from 'react';
import { Route, Link } from 'react-router-dom';
import Button from 'react-toolbox/lib/button/Button';
import Home from '../home';
import About from '../about';

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
      <Button raised primary>This is RT!!</Button>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
);

export default App;
