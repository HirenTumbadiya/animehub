import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const GenresDropdown = ({ activeWebsite,toggleMenu }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const toggle = () => {
    setIsDropdownOpen(!isDropdownOpen)
    toggleMenu()
  }

  return (
    <div className="relative inline-block text-left w-full">
      <div>
        <button
          type="button"
          onClick={toggleDropdown}
          className="inline-flex justify-between font-medium w-full rounded-md border border-gray-300 px-4 py-2 bg-white  text-black hover:bg-gray-50 focus:outline-none"
          id="genres-menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          <p>Genres</p>
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M6 8a1 1 0 011.707-.707l4 4a1 1 0 010 1.414l-4 4A1 1 0 016 16V8z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {/* Dropdown menu */}
      {isDropdownOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white w-full ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="genres-menu-button"
          tabIndex="-1"
        >
          <div className="py-1" role="none">
            {genres.map(genre => (
              <Link
                key={genre.slug}
                to={`/genres/${genre.id}`}
                className="block px-4 py-2 text-sm text-black font-medium hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                tabIndex="-1"
                onClick={toggle}

              >
                {genre.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GenresDropdown;
