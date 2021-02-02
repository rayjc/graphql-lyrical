import React, { useState } from 'react';

const SongCreate = () => {
  const [title, setTitle] = useState('');

  return (
    <div>
      <h3>Create a new song</h3>
      <form>
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