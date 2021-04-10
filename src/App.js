import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from './Pages/Homepage';
import Partsfinder from './Pages/Partsfinder';
import LabelBottomNavigation from './components/Navmenu';

export default function App() {

  return (
    <div id="app">
      <Router>
      <LabelBottomNavigation />
        <Switch>
          <Route path="/home">
            <Homepage />
          </Route>
          <Route path="/search">
            <Partsfinder />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}


