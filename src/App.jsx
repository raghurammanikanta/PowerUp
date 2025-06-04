import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SearchExercise from './components/SearchExercise'
import ExerciseDetails from './components/ExerciseDetails'
import BMI from './components/BMI'
import Breathing from './components/Breathing'
import About from './components/About'


const App = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercises" element={<SearchExercise/>} />
          <Route path="/:id" element={<ExerciseDetails />} />
          <Route path="/BMI" element={<BMI/>} />
          <Route path="/breathingtest" element={<Breathing/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      
      
      
    </div>
  )
}

export default App
