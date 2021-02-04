import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SongCreate from './SongCreate';
import SongDetail from './SongDetail';
import SongList from './SongList';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/songs/new">
        <SongCreate />
      </Route>
      <Route path="/songs/:id">
        <SongDetail />
      </Route>
      <Route exact path="/">
        <SongList />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;