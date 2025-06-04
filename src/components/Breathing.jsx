import React from 'react'
import { Box,Stack,Typography } from '@mui/material'
import Navbar from './Navbar'
import Footer from './Footer'

const Breathing = () => {
  return (
    
    <Box>
        <Navbar/>
      <Stack direction="column" spacing={2} alignItems="center">
        <Typography variant="h4" sx={{ color: '#000', fontWeight: 'bold' }}>
          Breathing Exercise
        </Typography>
        <video
            src="../assets/breathing.mp4"
            loop
            autoPlay
            muted
            style={{
            width: '80%',
                
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            objectFit: 'cover'
            }}>
        </video>
      </Stack>
      <Footer/>
    </Box>
  )
}

export default Breathing
