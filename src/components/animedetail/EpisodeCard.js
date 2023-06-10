import React from 'react';

const EpisodeCard = ({ episode }) => {

    const [date] = episode.aired.split("T");
  return (
    <div className="border border-gray-300 rounded p-4 mb-4 w-full overflow-y-scroll">
      <h3 className="text-lg font-semibold mb-2">{episode.title}</h3>
      <p className="text-gray-500">Aired: {date}</p>
    </div>
  );
};

export default EpisodeCard;
