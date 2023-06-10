import React from 'react';
import {Link } from 'react-router-dom';

const GenresList = ({ activeWebsite }) => {
  const genres = [
    { id: 1, name: 'Action', slug: 'action' },
    { id: 2, name: 'Adventure', slug: 'adventure' },
    { id: 4, name: 'Comedy', slug: 'comedy' },
    { id: 8, name: 'Drama', slug: 'drama' },
    { id: 36, name: 'Slice of Life', slug: 'slice-of-life' },
    { id: 10, name: 'Fantasy', slug: 'fantasy' },
    { id: 37, name: 'Supernatural', slug: 'supernatural' },
    { id: 14, name: 'Horror', slug: 'horror' },
    { id: 7, name: 'Mystery', slug: 'mystery' },
    { id: 40, name: 'Psychological', slug: 'psychological' },
    { id: 22, name: 'Romance', slug: 'romance' },
    { id: 24, name: 'Sci-Fi', slug: 'sci-fi' },
  ];

  return (
      <ul className='px-40 py-5 grid grid-cols-3 gap-10 text-lg'>
        {genres.map(genre => (
          <li key={genre.slug} className='py-2 px-4 hover:bg-gray-700 rounded-full text-center'>
            <Link to={`/genres/${genre.id}`}>{genre.name}</Link>
          </li>
        ))}
      </ul>
  );
};

export default GenresList;
