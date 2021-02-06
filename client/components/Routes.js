import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SongCreate from './song/SongCreate';
import SongDetail from './song/SongDetail';
import SongList from './song/SongList';

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