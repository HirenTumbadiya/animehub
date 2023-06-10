import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RandomVideoSection from '../components/homepage/RandomVideoSection';
import UpComingAnime from '../components/homepage/UpComingAnime';
import LatestAnime from '../components/homepage/LatestAnime';
import Update from '../components/homepage/Update';
import SearchPopup from '../components/common/SearchPopup';
import Recommendation from '../components/manga/Recommendation';
import LatestManga from '../components/manga/LatestManga';
import UpcomingManga from '../components/manga/UpcomingManga';
import MangaImage from '../components/manga/MangaImage';

const Manga = () => {
  const [upcomingManga, setUpcomingManga] = useState([]);
  const [latestManga, setLatestManga] = useState([]);
  const [recommendationManga, setRecommendationManga] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch upcoming anime
        const upcomingMangaResponse = await axios.get('https://api.jikan.moe/v4/top/manga?filter=upcoming');
        const latestMangaResponse = await axios.get('https://api.jikan.moe/v4/top/manga?filter=bypopularity');
        const RecommendationMangaResponse = await axios.get('https://api.jikan.moe/v4/top/manga?filter=recommendation');
        setUpcomingManga(upcomingMangaResponse.data.data);
        setLatestManga(latestMangaResponse.data.data)
        setRecommendationManga(RecommendationMangaResponse.data.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
<div className='bg-black'>
        <MangaImage/>
    <div className=' mx-16 text-slate-300'>
        <UpcomingManga upcomingManga={upcomingManga} />
    </div>
    <div className=' mx-16 text-slate-300'>
        <LatestManga latestManga={latestManga} />
    </div>
    <div className=' mx-16 text-slate-300'>
        <Update />
    </div>
    <div className=' mx-16 text-slate-300'>
        <Recommendation recommendationManga={recommendationManga} />
    </div>
    </div>
  );
};

export default Manga;
