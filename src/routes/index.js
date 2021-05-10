import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';


export default function Routes() {

  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={Home} />
      <Route exact path="/register" component={Register} />
    </Switch>
  );
}