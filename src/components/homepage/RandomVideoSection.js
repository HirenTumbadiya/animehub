import React, { useEffect, useState } from 'react';
import localVideoUrl from '../../assets/video/demon.mp4';

function RandomVideoSection() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleVideoLoaded = () => {
      setVideoLoaded(true);
    };

    const videoElement = document.getElementById('video-player');
    videoElement.addEventListener('loadeddata', handleVideoLoaded);

    return () => {
      videoElement.removeEventListener('loadeddata', handleVideoLoaded);
    };
  }, []);

  const handlePlayClick = () => {
    const videoElement = document.getElementById('video-player');
    setIsPlaying(true);
    videoElement.play();
  };

  const handlePauseClick = () => {
    const videoElement = document.getElementById('video-player');
    setIsPlaying(false);
    videoElement.pause();
  };

  return (
    <section>
      <div className="relative">
        {videoLoaded ? null : (
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              className="text-white bg-black px-4 py-2 rounded-md"
              onClick={handlePlayClick}
            >
              Play
            </button>
          </div>
        )}
        <video
          id="video-player"
          autoPlay
          loop
          className="w-full"
          width="100%"
          height="315"
          controls
        >
          <source src={localVideoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              className="text-white bg-black px-4 py-2 rounded-md opacity-50 hover:opacity-100 transition-opacity"
              onClick={handlePauseClick}
            >
              Pause
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default RandomVideoSection;
