import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { Link, useHistory } from 'react-router-dom';
import fetchSongs from '../queries/fetch-songs';

const ADD_SONG = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      id
      title
    }
  }
`;


const SongCreate = () => {
  const [title, setTitle] = useState('');
  const [addSong, { data }] = useMutation(ADD_SONG);
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (title) {
      addSong({
        variables: { title },
        refetchQueries: [{ query: fetchSongs }]
      });
      history.push('/');
    }
    setTitle('');
  };

  return (
    <div>
      <Link to="/">Back</Link>
      <h3>Create a new song</h3>
      <form onSubmit={handleSubmit}>
        <label>Song Title:</label>
        <input
          onChange={(evt) => setTitle(evt.target.value)}
          value={title}
        />
      </form>
    </div>
  );
};

export default SongCreate;