import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import FETCH_SONGS from '../queries/fetch-songs';
import SongRemove from './SongRemove';

const SongList = () => {
  const { loading, error, data } = useQuery(FETCH_SONGS);

  if (loading) return <div>'Loading...'</div>;
  if (error) return <div>`Error! ${error.message}`</div>;

  return (
    <div>
      <ul className="collection">{
        data.songs.map(({ id, title }) => {
          return (
            <li key={id} className="collection-item">
              <Link to={`/songs/${id}`}>{title}</Link>
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