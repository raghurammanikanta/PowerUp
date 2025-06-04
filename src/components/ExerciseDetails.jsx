import React from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import {useState} from 'react';
import Navbar from './Navbar';
import axios from 'axios';

const ExerciseDetails = () => {
    const { id } = useParams();
    const [exerciseDetails, setExerciseDetails] = useState(null);
    const fetchExerciseDetails = async () => {
        try {
            const response = await axios.get(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`, {
                headers: {
                    'x-rapidapi-key': '524c593e83msh8d48210a0213849p19a087jsna8742d2cf0f3',
		            'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
                }
            });
            setExerciseDetails(response.data);
        } catch (error) {
            console.error('Error fetching exercise details:', error);
        }
       
    

    }

    fetchExerciseDetails();

    

    


  return (
    <Box>
        <Navbar/>
    <Box>
        
       <Stack>
            {exerciseDetails ? (
                <Box sx={{  p: 2, backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
                    <Typography variant="h4" component="h2" gutterBottom>
                        {exerciseDetails.name}
                    </Typography>
                    <img src={exerciseDetails.gifUrl} alt={exerciseDetails.name} loading="lazy" style={{ width: '600px', height: 'auto', borderRadius: '8px' }} />
                    <Typography variant="body1" sx={{ mt: 2 }}>
                        Target Body Part: <b>{exerciseDetails.target}</b>
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 1 }}>
                        Equipment: <b>{exerciseDetails.equipment}</b>
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 1 }}>
                        Exercise Type: <b>{exerciseDetails.bodyPart}</b>   
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 1 }}>
                        Description: {exerciseDetails.instructions}
                    </Typography>
                    <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={() => window.open(`https://www.youtube.com/results?search_query=${exerciseDetails.bodyPart} exercises`, '_blank')}>
                        watch on youtube

                    </Button> 
                </Box>
            ) : (
                <Typography variant="h6" color="error">
                    Loading exercise details...
                </Typography>
            )}




       </Stack>
    </Box>
    </Box>

   
  )
}

export default ExerciseDetails