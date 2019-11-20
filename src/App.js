import React from 'react';
import './App.css';

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/rooms/" component={Rooms}/>
        <Route path="/single-room" component={SingleRoom}/>
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
