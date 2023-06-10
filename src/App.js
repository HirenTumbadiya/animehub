import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Navbar from './components/common/Navbar'
import Home from './pages/Home'
import Footer from './components/common/Footer'
import GenresPage from './pages/GenresPage';
import AnimeDetailPage from './pages/AnimeDetailPage';

const App = () => {

  const [activeWebsite, setActiveWebsite] = useState('anime');

  return (
        <Router>
        <Navbar activeWebsite={activeWebsite} setActiveWebsite={setActiveWebsite}  />
        <Routes>
        <Route exact path='/' element={< Home activeWebsite={activeWebsite} />}/>
        <Route path='/genres/:genre' element={<GenresPage activeWebsite={activeWebsite} />} />
        <Route exact path="/details/:mal_id" element={<AnimeDetailPage activeWebsite={activeWebsite} />} />
        </Routes>
        <Footer />
      </Router>
  )
}

export default App
