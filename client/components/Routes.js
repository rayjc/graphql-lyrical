import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SongCreate from './SongCreate';
import SongList from './SongList';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/song/new">
        <SongCreate />
      </Route>
      <Route exact path="/">
        <SongList />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;