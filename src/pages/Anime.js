import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RandomVideoSection from '../components/homepage/RandomVideoSection';
import UpComingAnime from '../components/homepage/UpComingAnime';
import LatestAnime from '../components/homepage/LatestAnime';
import Update from '../components/homepage/Update';
import Recommendation from '../components/homepage/Recommendation';

const Home = () => {
  const [upcomingAnime, setUpcomingAnime] = useState([]);
  const [latestAnime, setLatestAnime] = useState([]);
  const [recommendationAnime, setRecommendationAnime] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch upcoming anime
        const upcomingAnimeResponse = await axios.get('https://api.jikan.moe/v4/top/anime?filter=upcoming');
        const latestAnimeResponse = await axios.get('https://api.jikan.moe/v4/top/anime?filter=bypopularity');
        const recommendationAnimeResponse = await axios.get('https://api.jikan.moe/v4/top/anime?filter=recommendation');
        console.log(latestAnimeResponse);
        setUpcomingAnime(upcomingAnimeResponse.data.data);
        setLatestAnime(latestAnimeResponse.data.data)
        setRecommendationAnime(recommendationAnimeResponse.data.data)
      } catch (error) {
        if (error.response && error.response.status === 429) {
          // Retry after a delay
          await new Promise(resolve => setTimeout(resolve, 20000)); // Wait for 1 second
          fetchData(); // Retry the request
        } else {
          console.error('Error fetching data:', error);
        }
      }
    };

    fetchData();
  }, []);

  return (
    <div className='bg-black'>
        <RandomVideoSection />
    <div className=' mx-16 text-slate-300'>
        <LatestAnime latestAnime={latestAnime} />
    </div>
    <div className=' mx-16 text-slate-300'>
        <UpComingAnime upcomingAnime={upcomingAnime} />
    </div>
    <div className=' mx-16 text-slate-300'>
        <Update />
    </div>
    <div className=' mx-16 text-slate-300'>
        <Recommendation recommendationAnime={recommendationAnime} />
    </div>
    </div>
  );
};

export default Home;
