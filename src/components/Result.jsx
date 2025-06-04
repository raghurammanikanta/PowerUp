import React from 'react'
import { Stack, Box, Typography,Grid} from '@mui/material'
import {Link} from 'react-router-dom'

const Result = ({exercises}) => {

  return (
    <Box sx={{ mt: { lg: '100px', xs: '60px' }, ml: { sm: '50px' } }}>
      <Typography variant="h3" mb="46px">
      </Typography>
      {exercises.length ?(
    <Stack direction={{ lg: 'row', xs: 'column' }}>
            {exercises.slice(0,6).map((exercise) => (
                <Grid  backgroundColor="#fff" key={exercise.id} item xs={12} sm={6} md={4} lg={3} sx={{ p: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', margin: '10px' }}>
                    <img src={exercise.gifUrl} alt={exercise.name} loading="verylazy" style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
                    <Typography variant="h5" sx={{ mt: '10px', fontWeight: 'bold', color: '#f44336' }}>
                        {exercise.name}
                    </Typography>
                
                    <Typography variant="body1" sx={{ color: '#757575' }}>
                    
                        {"Target body part "}<b>{exercise.target}</b> 
                    </Typography>
                    <Link to={`/${exercise.id}`} style={{ textDecoration: 'none', color: '#fff', marginTop: '10px' }}>

                    <button style={{border: 'none', backgroundColor: '#f44336', color: '#fff', padding: '10px 20px', borderRadius: '5px', textDecoration: 'none'}}>
                        
                        View Details
                        
                    </button>
                    </Link>

    
        

                    
                </Grid>
            ))}
        </Stack>)
      
        :
            <Typography variant="h5" color="error">
            Search for exercises by name or category to see results.
            </Typography>}
        
    </Box>



  )
}

export default Result