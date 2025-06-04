import React from 'react'
import { Box, Typography  ,Stack} from '@mui/material'

const Footer = () => {
  return (
    <Box>
        <Stack direction="row" justifyContent="center" alignItems="center" sx={{ backgroundColor: '#f44336', padding: '20px' }}>
            <Typography variant="h6" sx={{ color: '#fff', fontWeight: 'bold' }}>
            © 2025 PowerUp. All rights reserved.
            </Typography>
        </Stack>
        <Box sx={{ textAlign: 'center', padding: '10px', backgroundColor: '#f5f5f5' }}>
            <Typography variant="body2" sx={{ color: '#757575' }}>
            Made with ❤️ by Raghuram
            </Typography>
        </Box>
    </Box>
    
  )
}

export default Footer