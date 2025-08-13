import React from 'react'
import Banner from '../components/Banner'
import Download from '../components/Download'
import Started from '../components/Started'
import Intregate from '../components/Intregate'
import Tool from '../Tool'
import Transparent from '../components/Transparent'
import About from '../components/About'
import Carousel from '../components/Carousel'

const Home = () => {
  return (
    <>
    <Banner />
    <Tool />
    <Carousel />
    <About />
    <Download />
    <Transparent />
    <Intregate />
    <Started />


    </>
  )
}

export default Home