import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {partData} from './components/partData';
import Home from './components/Home';
import Search from './components/Search';
import Partlist from './components/Partlist';
import LabelBottomNavigation from './components/Navmenu';

export default function App() {
  const [partsearch, setPartsearch] = useState("")

  const handleInput = (event) => {
    setPartsearch(event.target.value) 
  }

  return (
    <div>
      <Router>
      <LabelBottomNavigation />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/search">
            <Search change={handleInput} value={partsearch.input}/>
            <Partlist parts={partData} term={partsearch}/>
          </Route>
        </Switch>
      </Router>
 
    </div>
  );
}


