import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CharacterCard from '../components/animedetail/CharacterCard';
import EpisodeCard from '../components/animedetail/EpisodeCard';

const AnimeDetailPage = ({ activeWebsite }) => {
  const { mal_id } = useParams();
  const [animeData, setAnimeData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [episode, setEpisode] = useState([]);

  useEffect(() => {
    const fetchAnimeData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(`https://api.jikan.moe/v4/${activeWebsite}/${mal_id}`);
        const data = await response.json();
        console.log(data.data.aired.string);
        setAnimeData(data.data);
      } catch (error) {
        console.log('Error fetching anime data:', error);
      }

      setIsLoading(false);
    };

  const fetchCharacterData = async () => {
    try {
      const response = await fetch(`https://api.jikan.moe/v4/${activeWebsite}/${mal_id}/characters`);
      const data = await response.json();
      setCharacters(data.data);
    } catch (error) {
      console.log('Error fetching character data:', error);
    }
  };
  const fetchEpisodeData = async () => {
    try {
      const response = await fetch(`https://api.jikan.moe/v4/${activeWebsite}/${mal_id}/episodes`);
      const data = await response.json();
      console.log(data);
      setEpisode(data.data);
    } catch (error) {
      console.log('Error fetching character data:', error);
    }
  };
  fetchEpisodeData()
  fetchAnimeData();
  fetchCharacterData();
}, [mal_id]);

  return (
    <div className='bg-black mt-10 p-10'>
      {isLoading ? (
        <div className="text-white h-screen md:flex justify-center text-center">
          <p className='self-center'>Loading...</p>
        </div>
      ) : (
        <div>
          <h1 className='text-white text-5xl font-bold mb-4'>{animeData.title}</h1>
           <div className='md:flex gap-10'>
            <div className='md:w-1/3'>
              <img
                src={animeData.images.jpg.large_image_url}
                // alt={animeData.title}
                className='object-cover rounded'
              />
            </div>
            <div className='md:w-2/3'>
              <p className='text-white mb-2'>
                <span className='font-bold'>Type:</span> {animeData.type}
              </p>
              <p className='text-white mb-2'>
                <span className='font-bold'>Episodes:</span> {animeData.episodes}
              </p>
              <p className='text-white mb-2'>
                <span className='font-bold'>Score:</span> {animeData.score}
              </p>
              <p className='text-white mb-2'>
                <span className='font-bold text-sm md:text-lg'>Synopsis:</span> {animeData.synopsis}
              </p>
            </div>
          </div>

          {/* Other Details */}
          <div className="text-white mt-10 md:flex w-full md:h-96">
            <div className='md:w-2/4'>
            <h2 className="text-4xl font-bold flex self-center justify-center items-center my-2">Other Details</h2>
            <div className='md:grid md:grid-cols-2 text-base md:text-xl pt-5'>
            <p className="text-white mb-2">
              <span className="font-bold">Aired:</span> {animeData.aired.string}
            </p>
            <p className="text-white mb-2">
              <span className="font-bold">Status:</span> {animeData.status}
            </p>
            <p className="text-white mb-2">
              <span className="font-bold">Duration:</span> {animeData.duration}
            </p>
            <p className="text-white mb-2">
              <span className="font-bold">Rating:</span> {animeData.rating}
            </p>
            <p className="text-white mb-2">
              <span className="font-bold">Broadcast:</span> {animeData.broadcast.string}
            </p>
            <p className="text-white mb-2">
              <span className="font-bold">Source:</span> {animeData.source}
            </p>
            <p className="text-white mb-2">
              <span className="font-bold">Genres:</span> {animeData.genres.map(genre => genre.name).join(', ')}
            </p>
            <p className="text-white mb-2">
              <span className="font-bold">Producers:</span> {animeData.producers.map(producer => producer.name).join(', ')}
            </p>
            <p className="text-white mb-2">
              <span className="font-bold">Studios:</span> {animeData.studios.map(studio => studio.name).join(', ')}
            </p>
            <p className="text-white mb-2">
              <span className="font-bold">Licensors:</span> {animeData.licensors.map(licensor => licensor.name).join(', ')}
            </p>
            <p className="text-white mb-2">
              <span className="font-bold">Popularity:</span> {animeData.popularity}
            </p>
            <p className="text-white mb-2">
              <span className="font-bold">Favorites:</span> {animeData.favorites}
            </p>
            </div>
            </div>
            <div className='md:w-2/4 overflow-y-scroll'>
          {/* Episode List */}
            <h2 className="text-4xl pb-5 font-bold">Episode List</h2>
          <div className="text-white w-full">
            {episode.map(episode => (
              <EpisodeCard key={episode.episode_id} episode={episode} />
            ))}
          </div>
            </div>
          </div>

          {/* Character List */}
          <div className="text-white md:m-10">
            <h2 className="text-4xl w-full flex justify-center text-center font-bold pb-10">Characters</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {characters.map(character => (
                <CharacterCard key={character.mal_id} character={character} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnimeDetailPage;
