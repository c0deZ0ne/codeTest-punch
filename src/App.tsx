import React, { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import MarketPlace from './components/Marketplace/MarketPlace'
import Border from './components/Border/Border'
import Review from './components/Review/Review'
import Screening from './components/Screening/Screening'
import StartJourney from './components/StartJourney/StartJourney'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
<main className='h-full relative'>
  <Navbar />
  <Hero />
  <Border />
  <MarketPlace />
  <Review /> 
  <Screening />

  <StartJourney />
  <Footer/>

  

</main>


   
  
     
    </>
    
  )
}

export default App
