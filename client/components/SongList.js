import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import fetchSongs from '../queries/fetch-songs';
import SongRemove from './SongRemove';

const SongList = () => {
  const { loading, error, data } = useQuery(fetchSongs);

  if (loading) return <div>'Loading...'</div>;
  if (error) return <div>`Error! ${error.message}`</div>;

  return (
    <div>
      <ul className="collection">{
        data.songs.map(({ id, title }) => {
          return (
            <li key={id} className="collection-item">
              {title}
              <SongRemove songId={id} />
            </li>
          );
        })
      }</ul>
      <Link to="/songs/new" className="btn-floating btn-large red right">
        <i className="material-icons">add</i>
      </Link>
    </div>
  );
};


export default SongList;