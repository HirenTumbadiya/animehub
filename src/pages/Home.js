import React from 'react'
import Anime from './Anime'
import Manga from './Manga'

const Home = ({ activeWebsite }) => {
  return (
    <div>
      {activeWebsite === 'anime' && <Anime />}
      {activeWebsite === 'manga' && <Manga />}
    </div>
  )
}

export default Home
