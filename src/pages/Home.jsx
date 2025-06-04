import { Box } from '@mui/material'

import React from 'react'
import HeroBanner from '../components/HeroBanner'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <Box>
      <Navbar/>
 
    <HeroBanner />
    <Footer/>
    </Box>
  )
}

export default Home