import { gql, useMutation } from '@apollo/client';
import React from 'react';

const LIKE_LYRIC = gql`
  mutation LikeLyric($id: ID!) {
    likeLyric(id: $id) {
      id,
      likes
    }
  }
`;

const LyricLike = ({ id, likes }) => {
  const [likeLyric] = useMutation(LIKE_LYRIC);

  const handleClick = () => {
    likeLyric({
      variables: { id },
      // render this expected response first while waiting for response
      optimisticResponse: {
        __typename: 'Mutation',
        likeLyric: {
          __typename: 'LyricType',
          id,
          likes: likes + 1,
        }

      }
    });
    // No need to refetch query since lyric is cached with same id
    // Apollo will rerender all components with the same id
  };

  return (
    <div className="vote-box">
      <i
        className="material-icons"
        onClick={handleClick}
      >
        thumb_up
      </i>
      {likes}
    </div>
  );
};

export default LyricLike;