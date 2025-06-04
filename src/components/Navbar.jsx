import React from 'react'
import { Stack, Box } from '@mui/material'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box sx={{
      width: 'auto',
      height: '80px',
      backgroundColor: '#fff',
      position: 'sticky',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 40px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    }}>
      <Stack  justifyContent={"none"}
        direction="row"
        sx={{
          gap: { ls: '40', sm: '3px', xs: '20px' },
          justifyContent: 'none',
          px: '20px'
        }}
      >
        <NavLink 
          to="/" 
          style={({ isActive }) => ({
            textDecoration: 'none',
            color: isActive ? '#f44336' : '#333',
          })}
        >
          <Stack direction="row" alignItems="center" gap="10px">
            <img src="../assets/gym icon.png" style={{ height: '100px' }} alt='gymicon' />
            <h1 style={{ fontSize: "44px", marginTop: '60px' }}>PowerUp</h1>
          </Stack>
        </NavLink>
      </Stack>
      
      <Stack sx={{ paddingRight: '100px' }}>
        <ul style={{ display: 'flex', listStyleType: 'none', marginTop: '60px', gap: '20px' }}>
          <li>
            <NavLink 
              to="/"
              style={({ isActive }) => ({
                fontSize: isActive ? '30px' : '24px',
                color: isActive ? '#f44336' : '#757575',
                textDecoration: 'none',
                paddingBottom: '10px',
                fontWeight: isActive ? 'bold' : 'normal'
              })}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/exercises"
              style={({ isActive }) => ({
                fontSize: '24px',
                color: isActive ? '#f44336' : '#757575',
                textDecoration: 'none',
                fontWeight: isActive ? 'bold' : 'normal'
              })}
            >
              Exercises
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/BMI"
              style={({ isActive }) => ({
                fontSize: '24px',
                color: isActive ? '#f44336' : '#757575',
                textDecoration: 'none',
                fontWeight: isActive ? 'bold' : 'normal'
              })}
            >
              BMI Calculator
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/breathingtest"
              style={({ isActive }) => ({
                fontSize: '24px',
                color: isActive ? '#f44336' : '#757575',
                textDecoration: 'none',
                fontWeight: isActive ? 'bold' : 'normal'
              })}
            >
              Breathing Test
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about"
              style={({ isActive }) => ({
                fontSize: '24px',
                color: isActive ? '#f44336' : '#757575',
                textDecoration: 'none',
                fontWeight: isActive ? 'bold' : 'normal'
              })}
            >
              About
            </NavLink>
          </li>
        </ul>
      </Stack> 
    </Box>
  )
}

export default Navbar