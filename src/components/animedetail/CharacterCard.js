import React from 'react';

const CharacterCard = ({ character }) => {
  return (
    <div key={character.character.mal_id}>
      <img src={character.character.images.jpg.image_url} alt={character.character.name} className="object-cover rounded h-52 w-48" />
      <p className="text-white mt-2">{character.character.name}</p>
    </div>
  );
};

export default CharacterCard;
