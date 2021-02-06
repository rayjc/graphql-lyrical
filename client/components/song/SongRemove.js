import { gql, useMutation } from '@apollo/client';
import React from 'react';
import FETCH_SONGS from '../../queries/fetch-songs';

const REMOVE_SONG = gql`
  mutation DELETE_SONG($id: ID!) {
    deleteSong(id: $id) {
      id
    }
  }
`;

const SongRemove = ({ songId }) => {
  const [removeSong, { data }] = useMutation(REMOVE_SONG, {
    // callback to remove deleted song from cache
    update(cache) {
      cache.modify({
        fields: {
          songs(existingSongs, { readField }) {
            return existingSongs.filter(
              song => songId !== readField('id', song)
            );
          }
        }
      });
    }
  });

  const handleClick = () => {
    removeSong({
      variables: { id: songId },
      refetchQueries: [{ query: FETCH_SONGS }]
    });
  };

  return (
    <i
      className="material-icons"
      onClick={handleClick}
    >
      delete
    </i>
  );
};

export default SongRemove;