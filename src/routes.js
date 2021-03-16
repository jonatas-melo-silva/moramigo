import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import BuscarPessoas from './pages/BuscarPessoas';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/buscarpessoas" component={BuscarPessoas} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes
