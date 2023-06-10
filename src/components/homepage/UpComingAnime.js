import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const UpcomingAnime = ({ upcomingAnime }) => {

    const sliderSettings = {
        dots: false,
        infinite: true,
        swipe: true,
        draggable: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };

  return (
    <div className='md:mx-20 text-slate-300'>
      {/* Upcoming Anime */}
      <section>
        <h2 className=' font-bold text-3xl py-5'>Upcoming Anime</h2>
        <Slider {...sliderSettings}>
          {upcomingAnime.map((anime) => (
          <Link to={`/details/${anime.mal_id}`}>
            <div key={anime.mal_id}>
              <img               
              src={anime.images.jpg.large_image_url}
              alt={anime.title}
              className="h-58 md:w-48 object-cover rounded"
              />
              <h3 className='relative font-semibold w-9/12'>{anime.title}</h3>
            </div>
            </Link>
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default UpcomingAnime;
