//import React from 'react'
import { CircularProgress, Typography, Box } from '@mui/material'

const LoadingScreen = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <CircularProgress />
        <Typography variant="h6" sx={{ marginTop: 2 }}>Loading...</Typography>
    </Box>
  )
}

export default LoadingScreen