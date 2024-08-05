import { Box, Container, Stack } from '@mui/material'
import React from 'react'
import Hero from '../hero/Hero'
import Recents from '../recents/Recents'
import Right from '../rightbar/Right';

function Home() {
  return (
    <>
        <Box>
             <Hero/>
            <Container>
                <Container/> 
                 <hr/>                 
                  <Stack direction={{ xs: "column", md: "row" }}
                 spacing={{ xs: 1, sm: 2, md: 8 }}
                  mt={8}>

                    <Box flex={3} sx={{ padding: "18px 100px 100px 100px" }}>
                         <Recents/>
                    </Box>

                      <Box flex={0.5}>
                           <Right/>
                      </Box>
                      
                  </Stack>
            </Container>
        </Box>
    </>
  )
}

export default Home