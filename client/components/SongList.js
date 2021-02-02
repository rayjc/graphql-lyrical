import React from 'react';
import { gql, useQuery } from '@apollo/client';

const query = gql`
  {
    songs {
      id
      title
    }
  }
`;

const SongList = () => {
  const { loading, error, data } = useQuery(query);

  if (loading) return <div>'Loading...'</div>;
  if (error) return <div>`Error! ${error.message}`</div>;

  return (
    <ul className="collection">{
      data.songs.map(song => {
        return (
          <li key={song.id} className="collection-item">{song.title}</li>
        );
      })
    }</ul>
  );
};


export default SongList;