import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchPopup from './SearchPopup';
import GenresList from './GenresList';
import { Link } from 'react-router-dom';
import GenresDropdown from './GenresDropdown';

const Navbar = ({ activeWebsite, setActiveWebsite }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [navbarTransparent, setNavbarTransparent] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isGenresOpen, setIsGenresOpen] = useState(false);

  const toggleGenresMenu = () => {
    setIsGenresOpen(!isGenresOpen);
  };
  

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setNavbarTransparent(false);
      } else {
        setNavbarTransparent(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    const closeDropdown = () => {
      setShowDropdown(false);
    };

    // Add event listener to close the dropdown when clicking outside
    document.addEventListener('click', closeDropdown);

    // Cleanup the event listener on unmount
    return () => {
      document.removeEventListener('click', closeDropdown);
    };
  }, []);

  const handleSearch = async () => {
    console.log(searchTerm);
    try {
      setIsLoading(true);
      const website = activeWebsite === 'anime' ? 'anime' : 'manga';
      const response = await axios.get(
        `https://api.jikan.moe/v4/${website}?q=${searchTerm}&sfw`
      );
      console.log(response);
      setSearchResults(response.data.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error searching anime:', error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    const handleKeyUp = (e) => {
      if (e.key === "Enter" && searchTerm.trim() !== "") {
        handleSearch();
      }
    };

    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [searchTerm]);

  const handleSearchClose = () => {
    setSearchTerm('');
    setSearchResults([]);
  };

  const handleWebsiteChange = (website) => {
    setActiveWebsite(website);
  };

  return (
    <nav
      className={` z-10 navbar fixed top-0 left-0 w-full h-16 transition duration-300 ${
        navbarTransparent ? 'bg-black' : 'bg-transparent'
      }`}
    >
      <div className="md:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="md:block hidden text-red-600 font-bold text-2xl">AnimeHub</Link>
              <Link to="/" className=" font-bold text-2xl md:hidden block text-red-600">A</Link>
            </div>
            <div className="hidden md:block">
              <ul className="ml-10 flex items-baseline space-x-4">
                <li>
                <Link to="/" onClick={() => handleWebsiteChange('anime')}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  >
                    Anime
                  </Link>
                </li>
                <li>
                <Link to="/" onClick={() => handleWebsiteChange('manga')}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  >
                    Manga
                  </Link>
                </li>
                <li onMouseEnter={handleDropdownToggle} onMouseLeave={handleDropdownToggle}>
                <a
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Genres
                </a>
                {showDropdown && (
                  
            <div className="absolute w-full mt-2 bg-black text-white left-0 rounded shadow-md z-20">
            {activeWebsite === 'anime' && (
              <GenresList activeWebsite="anime" />
            )}
            {activeWebsite === 'manga' && (
              <GenresList activeWebsite="manga" />
            )}
            </div>
          )}
                </li>
              </ul>
            </div>
            
          </div>
          <div className="flex items-center">
  <div className="relative">
    <input
      type="text"
      placeholder="Search"
      className="bg-gray-800 outline-none rounded-2xl py-2 px-4 w-40 md:w-72 text-gray-500"
      value={searchTerm}
      onChange={(e) => {
        setSearchTerm(e.target.value);
        handleSearch(); // Call the search function as you type
      }}
    />
        {!searchTerm && (
    <div className="absolute inset-y-0 right-0 flex items-center justify-center mr-3 text-gray-400 hover:text-white">
      <svg
        className="h-5 w-5 text-gray-400"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M9 2a7 7 0 110 14A7 7 0 019 2zm0 12a5 5 0 100-10 5 5 0 000 10z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    )}
    {searchTerm && (
                <button
                  className="absolute inset-y-0 right-0 flex items-center justify-center mr-3 text-gray-400 hover:text-white"
                  onClick={handleSearchClose}
                >
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-9.41l3.54-3.54a1 1 0 10-1.41-1.41L10 7.59 6.46 4.05a1 1 0 10-1.41 1.41L8.59 10l-3.54 3.54a1 1 0 101.41 1.41L10 11.41l3.54 3.54a1 1 0 001.41-1.41L11.41 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              )}
  </div>
</div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open menu</span>
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black h-screen">
                <Link to="/" onClick={() => handleWebsiteChange('anime')}
                    className="text-black bg-white w-full block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                  >
                    Anime
                  </Link>
                  <Link to="/" onClick={() => handleWebsiteChange('manga')}
                    className="text-black bg-white w-full block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                  >
                    Manga
                  </Link>
                  <GenresDropdown activeWebsite={activeWebsite} toggleMenu={toggleMenu} />
        </div>
      </div>
      {searchTerm && (
        <SearchPopup
          searchTerm={searchTerm}
          searchResults={searchResults}
          isLoading={isLoading}
        />
      )}
    </nav>
  );
};

export default Navbar;
