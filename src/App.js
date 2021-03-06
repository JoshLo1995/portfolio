import React from 'react';
import Portfolio from './components/views/Portfolio';
import Resume from './components/views/Resume';
import Header from './components/TopBar';
import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path = "/">
            <Portfolio/>
          </Route>
          <Route exact path = "/resume">
            <Resume/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
