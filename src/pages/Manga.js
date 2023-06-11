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
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const upcomingMangaResponse = await axios.get(
          'https://api.jikan.moe/v4/top/manga?filter=upcoming'
        );
        const latestMangaResponse = await axios.get(
          'https://api.jikan.moe/v4/top/manga?filter=bypopularity'
        );
        const recommendationMangaResponse = await axios.get(
          'https://api.jikan.moe/v4/top/manga?filter=recommendation'
        );

        if (upcomingMangaResponse.status === 200) {
          setUpcomingManga(upcomingMangaResponse.data.data);
        } else {
          setError('Error fetching upcoming manga: ' + upcomingMangaResponse.statusText);

        }

        if (latestMangaResponse.status === 200) {
          setLatestManga(latestMangaResponse.data.data);
        } else {
          setError('Error fetching latest manga');
        }

        if (recommendationMangaResponse.status === 200) {
          setRecommendationManga(recommendationMangaResponse.data.data);
        } else {
          setError('Error fetching recommendation manga');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data');
      }
    };

    fetchData();
  }, []);

  return (
    <div className='bg-black'>
      <MangaImage />
      <div className='mx-16 text-slate-300'>
        <UpcomingManga upcomingManga={upcomingManga} />
      </div>
      <div className='mx-16 text-slate-300'>
        <LatestManga latestManga={latestManga} />
      </div>
      <div className='mx-16 text-slate-300'>
        <Update />
      </div>
      <div className='mx-16 text-slate-300'>
        <Recommendation recommendationManga={recommendationManga} />
      </div>
      {error && <div>{error}</div>}
    </div>
  );
};

export default Manga;
