import './output.css'
import React from 'react'
import Carousel from './components/carousel'
import Navbar from './components/navbar'
import Hero from './section/hero'
import Footer from './section/footer'

function App() {

  return (
    <>
    <div className='overflow-x-hidden'>
      <Navbar />
      <Hero />
    </div>
    </>
  )
}

export default App
