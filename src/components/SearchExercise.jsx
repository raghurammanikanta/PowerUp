import React, { useState } from 'react';
import axios from 'axios';
import { Stack, Box, TextField, Button, CircularProgress, Alert } from '@mui/material';
import Result from './Result';
import Navbar from './Navbar';

const SearchExercise = () => {
    const [search, setSearch] = useState('');
    const [exercises, setExercises] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const searchExercises = async () => {
        if (!search.trim()) return;
        
        setIsLoading(true);
        setError(null);
        
        try {
            // Add delay to prevent rate limiting
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            const response = await axios.get(
                `https://exercisedb.p.rapidapi.com/exercises/name/${search}`,
                {
                    headers: {
                       'x-rapidapi-key': '524c593e83msh8d48210a0213849p19a087jsna8742d2cf0f3',
		            'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
                    }
                }
            );
            
            setExercises(response.data);
            
        } catch (err) {
            setError(err.message);
            setExercises([]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <Navbar/>
            <Box sx={{ p: 3 }}>
                <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
                    <TextField 
                        placeholder='Search Body Part or Exercise '
                        variant='outlined' 
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                        sx={{
                            input: { fontWeight: '700', border: 'none', borderRadius: '4px' },
                            width: { lg: '800px', xs: '350px' },
                            backgroundColor: '#fff',
                            borderRadius: '40px',
                            height: '70px',
                            marginTop: '20px',
                            marginLeft: '20px'
                        }}
                    />
                    <Button 
                        onClick={searchExercises} 
                        disabled={isLoading}
                        sx={{
                            textDecoration: 'none', 
                            color: 'red', 
                            fontSize: '20px',
                            height: '70px'
                        }}
                    >
                        {isLoading ? <CircularProgress size={24} /> : 'Search'}
                    </Button>
                </Stack>
                
                {error && (
                    <Alert severity="error" sx={{ mt: 2 }}>
                        {error}
                    </Alert>
                )}
                
                <Result exercises={exercises} error={error}/>
            </Box>
        </>
    );
};

export default SearchExercise;