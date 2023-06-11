import React from 'react';
import { Link } from 'react-router-dom';

const Recommendation = ({ recommendationAnime }) => {

  if (!recommendationAnime) {
    return <div>Loading...</div>; // or any placeholder/loading component
  }

  return (
<div className='md:mx-20 text-slate-300'>
  {/* Upcoming Anime */}
  <section>
    <h2 className='font-bold text-3xl py-5'>Recommendation Anime</h2>
    <div className='grid grid-cols-2 md:grid-cols-5 gap-4'>
      {recommendationAnime.map((manga) => (
        <div key={manga.mal_id}>
          <Link to={`/details/${manga.mal_id}`}>
            <div className='h-58 md:w-48'>
              <img
                src={manga.images.jpg.large_image_url}
                alt={manga.title}
                className=' md:w-40 h-44 object-cover rounded'
              />
            </div>
            <h3 className='relative font-semibold text-sm md:w-40'>{manga.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  </section>
</div>

  );
};

export default Recommendation;
