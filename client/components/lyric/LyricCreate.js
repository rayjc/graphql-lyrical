import { gql, useMutation } from '@apollo/client';
import React, { useState } from 'react';

const ADD_LYRIC = gql`
  mutation AddLyricToSong($content: String!, $songId: ID!) {
    addLyricToSong(content: $content, songId: $songId) {
      id,
      lyrics {
        id
        content
        likes
      }
    }
  }
`;

const LyricCreate = ({ songId }) => {
  const [content, setContent] = useState('');
  const [addLyric] = useMutation(ADD_LYRIC);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (content) {
      addLyric({
        variables: { content, songId },
        // No need to refetchQueries since this query returns an updated object
        // of SongType identical to FETCH_SONG query with the same songId,
        // new lyrics will be added to cache automically to rerender this component
        // refetchQueries: [{ query: FETCH_SONG }]
      });
    }
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Add a line of Lyric</label>
      <input
        value={content}
        onChange={(event) => setContent(event.target.value)}
      />
    </form>
  );
};

export default LyricCreate;