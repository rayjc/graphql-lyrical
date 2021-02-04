import { useQuery } from '@apollo/client';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import FETCH_SONG from '../queries/fetch-song';

const SongDetail = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(FETCH_SONG, {
    variables: { id }
  });

  if (loading) return <div>'Loading...'</div>;
  if (error) return <div>Song not found!</div>;

  console.log(id);

  return (
    <div>
      <Link to="/">Back</Link>
      <h3>{data.song.title}</h3>
    </div>
  );
};

export default SongDetail;