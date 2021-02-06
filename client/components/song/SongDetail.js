import { useQuery } from '@apollo/client';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import FETCH_SONG from '../../queries/fetch-song';
import LyricCreate from '../lyric/LyricCreate';
import LyricList from '../lyric/LyricList';

const SongDetail = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(FETCH_SONG, {
    variables: { id }
  });

  if (loading) return <div>'Loading...'</div>;
  if (error) return <div>Song not found!</div>;

  return (
    <div>
      <Link to="/">Back</Link>
      <h3>{data.song.title}</h3>
      <LyricList lyrics={data.song.lyrics} />
      <LyricCreate songId={id} />
    </div>
  );
};

export default SongDetail;