import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Home from './components/Home';
import NavBar from './components/NavBar';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" />
        <PrivateRoute path="/home" component={Home} />
      </Switch>
    </div>
  );
};

export default App;
