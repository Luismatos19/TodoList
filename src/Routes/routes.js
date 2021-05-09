import React from 'react';
import { Switch } from 'react-router-dom'

import MyRoute from './MyRoute';


const Routes = () => {
  <Switch>
    <MyRoute exact path="/" component={App} />
  </Switch>
}