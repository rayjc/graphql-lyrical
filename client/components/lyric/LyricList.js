import React from 'react';
import LyricLike from './LyricLike';

const LyricList = ({ lyrics }) => {
  return (
    <ul className="collection">
      {
        lyrics.map(({ id, content, likes }) => {
          return (
            <li key={id} className="collection-item">
              {content}
              <LyricLike id={id} likes={likes} />
            </li>
          );
        })
      }
    </ul>
  );
};

export default LyricList;