
import { Box, Stack, Typography, styled, } from '@mui/material'
import KideImge from "../static/kids.jpeg"
import MenImge from "../static/men.jpeg"
import WomenImge from "../static/women.jpeg"
import React from 'react'


const StyledBox = styled(Box)({
  height: 200,
  width: "100%",
  cursor: "pointer",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  backgroundSize: "cover",
})


const StyledTypography = styled(Typography)({
  margin: "25% 50px 25% 50px",
  background: "white",
  opacity: "0.8",
})

function Catagories() {
  return (
    <>
      <Box>
        <Stack direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          mt={5}>
          <StyledBox sx={{ backgroundImage: `url(${KideImge})` }}>
            <StyledTypography align="center" variant="h3">
              Kids
            </StyledTypography>
          </StyledBox>
          <StyledBox sx={{backgroundImage: `url(${MenImge})`}} > 
          <StyledTypography align="center" variant="h3">
              Mens
            </StyledTypography>
          </StyledBox>
          <StyledBox sx={{backgroundImage: `url(${WomenImge})`}} > 
          <StyledTypography align="center" variant="h3">
              Women 
            </StyledTypography>
          </StyledBox>
        </Stack>
      </Box>
    </>
  )
}

export default Catagories