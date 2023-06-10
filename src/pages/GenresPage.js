import React, { useEffect, useState } from 'react';
import {Link, useParams } from 'react-router-dom';
import Pagination from '../components/common/Pagination';

const GenresPage = ({activeWebsite}) => {
  const { genre } = useParams(); // Access the genre parameter from the URL
  console.log(activeWebsite);
  const [genreData, setGenreData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);


  
  useEffect(() => {
    const fetchGenreData = async () => {
        setIsLoading(true);
      try {
        const response = await fetch(`https://api.jikan.moe/v4/${activeWebsite}?genres=${genre}&page=${currentPage}`);
        const data = await response.json();
        console.log(data);
        setGenreData(prevGenres => [...prevGenres, ...data.data]);
        setTotalPages(data.pagination.last_visible_page);
      } catch (error) {
        console.log('Error fetching genre data:', error);
      }
      setIsLoading(false);
    };
  
    fetchGenreData();
  }, [currentPage,genre]);

  useEffect(() => {
    // Reset genre data when the genre parameter changes
    setGenreData([]);
    setCurrentPage(1);
  }, [genre]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className=' bg-black mt-10 p-10'>
        {isLoading ? (
        <div className="text-white h-screen flex justify-center text-center"><p className=' self-center'>Loading...</p></div>
      ) : (
    <div className=' flex flex-wrap gap-10 justify-center'>
    {genreData.map(genre => (
        <Link to={`/details/${genre.mal_id}`}>
            <div className='flex flex-col justify-between'>
                <div key={genre.mal_id} className='h-58 w-48'>
                <img               
                src={genre.images.jpg.large_image_url}
                alt={genre.title}
                className="h-58 w-48 object-cover rounded"
                />
            </div>
                <p className='text-white flex w-48 font-medium'>{genre.title}</p>
            </div>
        </Link>
    ))}
    </div>
          )}
      <div className='flex justify-center items-center mt-10'>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      </div>
    </div>
  );
};

export default GenresPage;
