import React from 'react'
import { Stack } from '@mui/material'
import { Typography } from '@mui/material'
import { Box } from '@mui/material'


const HeroBanner = () => {
  return (
    <Box  >
      <Stack  >

        <Typography position={"absolute"}>
          <h1 style={{ fontSize: '24px', fontWeight: '600', marginTop: '80px',color:'#f44336', marginLeft:'20px'
           }}>
             Get Fit <br />
           Stay Healthy
          </h1>
        </Typography>
        

        <Stack  position="relative"  zIndex={-1} left="0px" top="0px" direction="row" justifyContent="center"  >
          <video controls loop autoPlay muted src="../assets/fitness.mp4"  type="video/mp4" style={{
            videostyle: 'none',
           
            width: '100%',
            height: 'auto',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            objectFit: 'cover'
            
          }}></video>

         </Stack>

      </Stack>
    </Box>
  )
}

export default HeroBanner
