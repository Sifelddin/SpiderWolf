import { Box } from '@mui/material'

import React from 'react'
import Welcome from './Welcome'
import News from './News'
import Games from './Games'
import About from './About'

function Home() {
  return (
    <Box component="main" position="static">
      <Box
        component="section"
        id="welcome"
        position="static"
        sx={{ backgroundColor: 'black.main' }}
      >
        <Welcome></Welcome>
      </Box>
      <Box
        component="section"
        id="news"
        position="static"
        sx={{ backgroundColor: 'primary.main', pt: 10, pb: 10 }}
      >
        <News></News>
      </Box>
      <Box
        component="section"
        id="games"
        position="static"
        sx={{ backgroundColor: 'light.main', pt: 10, pb: 10 }}
      >
        <Games></Games>
      </Box>
      <Box
        component="section"
        id="about"
        position="static"
        sx={{ backgroundColor: 'about.main', pb: 30 }}
      >
        <About></About>
      </Box>
    </Box>
  )
}

export default Home
