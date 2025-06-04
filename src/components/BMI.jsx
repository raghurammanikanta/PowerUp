import React from 'react'
import { Box, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import Navbar from './Navbar'
import Footer from './Footer'
import {useState} from 'react';


const BMI = () => {
    const [Weight, setWeight] = useState('0');
    const [Height, setHeight] = useState('0');
    const [BMI, setBMI] = useState('0');
    const [BmiCategory, setBmiCategory] = useState('');
     const CalculatingBmi = () => {
        const weightNum = parseFloat(Weight);
        const heightNum = parseFloat(Height)/100; 
        
        if (weightNum > 0 && heightNum > 0) {
            const bmi = weightNum / (heightNum * heightNum);
            setBMI(bmi.toFixed(2));
            // Update category immediately after calculating BMI
            if (bmi < 18.5) {
                setBmiCategory('Underweight');
            } else if (bmi >= 18.5 && bmi < 24.9) {
                setBmiCategory('Normal weight');
            } else if (bmi >= 25 && bmi < 29.9) {
                setBmiCategory('Overweight');
            } else {
                setBmiCategory('Obesity');
            }
        } else {
            setBMI('Please enter valid weight and height');
            setBmiCategory('');
        }
    }

    return (
    <Box>
      <Navbar />
      <Stack direction="column" alignItems="center" justifyContent="center" sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
        <Typography variant="h4" sx={{ marginBottom: '20px', color: '#f44336' }}>
          Body Mass Index (BMI) Calculator
        </Typography>
        <Box sx={{ width: '300px', padding: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <Typography variant="body1" sx={{ marginBottom: '10px' }}>
            Enter your weight (kg):
          </Typography>
          <input type="number" onChange={(e)=>setWeight(e.target.value)} placeholder="Weight in kg" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
          <Typography   variant="body1" sx={{ marginTop: '20px', marginBottom: '10px' }}>
            Enter your height (cm):
          </Typography>
          <input type="number" onChange={(e)=>setHeight(e.target.value)} placeholder="Height in cm" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
          <button onClick={CalculatingBmi} style={{ width: '100%', padding: '10px', backgroundColor: '#f44336', color: '#fff', borderRadius: '5px', border: 'none', marginTop:'20px' }}>
            Calculate BMI
          </button>
            <Typography variant="body1"  sx={{ marginTop: '20px', color: '#757575' }}>
                Your BMI is: <b>{BMI}</b>
            </Typography>
        </Box>
        <Box>
            <Typography variant="body1" sx={{ marginTop: '20px', color: '#757575' }}>
                Your BMI Category is: <b>{BmiCategory}</b>
            </Typography>   

            <Typography variant="body2" sx={{ marginTop: '20px', color: '#757575' }}>
                Note: BMI is a simple index of weight-for-height that is commonly used to classify underweight, overweight, and obesity in adults.

            </Typography>
        </Box>
      </Stack>
      <Footer />
    </Box>
  )
}

export default BMI