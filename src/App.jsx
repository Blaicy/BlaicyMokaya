import React from 'react'
import { useState, useEffect } from 'react'
import {Routes, Route} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Loader from './assets/Loader'
import MainPage from './assets/MainPage'
import About from './assets/About'
import Connect from './assets/Connect'

const App = () => {
   const [loadingDone, setLoadingDone] = useState(false);

  return (
    <>
     {!loadingDone && <Loader onFinish={() => setLoadingDone(true)} />}
      {loadingDone && (
        <AnimatePresence mode="wait">
          <Routes>
              <Route path='/' element={<MainPage />} />
              <Route path='/about' element={<About />} />
              <Route path='/connect' element={<Connect />} />
            </Routes>
          </AnimatePresence>
           )}
    </>
    )
}

export default App