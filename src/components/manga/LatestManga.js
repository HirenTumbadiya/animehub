import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const LatestManga = ({ latestManga }) => {

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
    <div className='lg:mx-20 text-slate-300'>
      {/* Upcoming Anime */}
      <section>
        <h2 className=' font-bold text-3xl py-5'>Top Manga</h2>
        <Slider {...sliderSettings}>
          {latestManga.map((anime) => (
            <>
                    <Link to={`/details/${anime.mal_id}`}>
            <div key={anime.mal_id} className='h-58 md:w-48'>
              <img               
              src={anime.images.jpg.large_image_url}
              alt={anime.title}
              className="h-58 md:w-48 object-cover rounded"
              />
            </div>
              <h3 className='relative font-semibold w-9/12'>{anime.title}</h3>
              </Link>
              </>
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default LatestManga;
