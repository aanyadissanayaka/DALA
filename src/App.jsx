import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

import dalaIcon from './assets/brand/dala-icon.png'

/* =========================================================
   PAGE IMPORTS
   ========================================================= */

import Home from './pages/Home'
import ElephantIndex from './pages/ElephantIndex'
import SinhaRajaProfile from './pages/SinhaRajaProfile'
import WasanaProfile from './pages/WasanaProfile'
import PulathisiRajaProfile from './pages/PulathisiRajaProfile'
import StoriesPage from './pages/StoriesPage'
import MahaweliStory from './pages/MahaweliStory'
import VisualArchive from './pages/VisualArchive'
import Unspoken from './pages/Unspoken'
import Discover from './pages/Discover'
import DiscoverArticle from './pages/DiscoverArticle'
import FoodFeedingArticle from './pages/FoodFeedingArticle'
import SriLankanCultureArticle from './pages/SriLankanCultureArticle'
import ExtraordinaryElephantArticle from './pages/ExtraordinaryElephantArticle'


function App() {
  /* =========================================================
     DOCUMENT TITLE + FAVICON
     ========================================================= */

  useEffect(() => {
    document.title = 'DALA'

    let favicon = document.querySelector("link[rel~='icon']")

    if (!favicon) {
      favicon = document.createElement('link')
      favicon.rel = 'icon'
      document.head.appendChild(favicon)
    }

    favicon.type = 'image/png'
    favicon.href = dalaIcon
  }, [])


  return (
    <BrowserRouter>
      <div className="dala-app">

        <Routes>

          {/* =================================================
              HOME
          ================================================== */}
          <Route
            path="/"
            element={<Home />}
          />


          {/* =================================================
              ELEPHANT INDEX
          ================================================== */}
          <Route
            path="/elephants"
            element={<ElephantIndex />}
          />


          {/* =================================================
              SINHA RAJA PROFILE
          ================================================== */}
          <Route
            path="/elephants/sinha-raja"
            element={<SinhaRajaProfile />}
          />


          {/* =================================================
              WASANA PROFILE
          ================================================== */}
          <Route
            path="/elephants/wasana"
            element={<WasanaProfile />}
          />


          {/* =================================================
              PULATHISI RAJA PROFILE
          ================================================== */}
          <Route
            path="/elephants/pulathisi-raja"
            element={<PulathisiRajaProfile />}
          />


          {/* =================================================
              STORIES
          ================================================== */}
          <Route
            path="/stories"
            element={<StoriesPage />}
          />


          {/* =================================================
              GUARDIANS OF THE MAHAWELI STORY
          ================================================== */}
          <Route
            path="/stories/guardians-of-the-mahaweli"
            element={<MahaweliStory />}
          />
          {/* =================================================
    VISUAL ARCHIVE
================================================== */}
          <Route
            path="/visual-archive"
            element={<VisualArchive />}
          />

          {/* =================================================
    UNSPOKEN
================================================== */}
          <Route
            path="/unspoken"
            element={<Unspoken />}
          />

          {/* =================================================
    DISCOVER
================================================== */}
          <Route
            path="/discover"
            element={<Discover />}
          />

          <Route path="/discover/habitats"
            element={<DiscoverArticle />}
          />

          <Route
            path="/discover/food-feeding"
            element={<FoodFeedingArticle />}
          />

          <Route
            path="/discover/sri-lankan-culture"
            element={<SriLankanCultureArticle />}
          />

<Route
  path="/discover/extraordinary-elephant"
  element={<ExtraordinaryElephantArticle />}
/>
        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App