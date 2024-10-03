import React from 'react';
import Player from './Player';
import players from './players';

const PlayersList = () => {
  return (
    <div className="PlayersList">
      {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;
