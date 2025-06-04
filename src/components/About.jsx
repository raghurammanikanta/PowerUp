import React from 'react'
import { Box, Typography } from '@mui/material'
import Navbar from './Navbar'
import Footer from './Footer'
import { Stack } from '@mui/system'


const About = () => {
  return (
   <Box>
        <Navbar />
       <Stack  >
    

        <Typography position={"absolute"}>
          <h1 style={{ fontSize: '32px', fontWeight: '600', marginTop: '80px',color:'#f44336', marginLeft:'20px'
           }}>
                About Us
          </h1>
          <p style={{ fontSize: '20px', marginTop: '20px', marginLeft: '20px', color: 'white' }}>
            Welcome to PowerUp, your ultimate destination for fitness and wellness! 
          </p>
        </Typography>

        

        <Stack  position="relative"  zIndex={-1} left="0px" top="0px" direction="row" justifyContent="center"  >
        <img src="../assets/about.jpg"   alt='gymicon' style={{width: '100%',
            height: 'auto',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            objectFit: 'cover'}} />
        

         </Stack>

      </Stack>

    <Footer/> 
   </Box>

  )
}

export default About
