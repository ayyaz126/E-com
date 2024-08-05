import { Box, Grid } from '@mui/material'
import React from 'react'
import cardImage from "../static/image3.jpeg"
import postImage1 from "../static/image1.jpeg"
import postImage2 from "../static/image2.jpeg"
import postImage3 from "../static/image4.jpeg"
import postImage4 from "../static/image5.jpeg"
import Card from '../card/Card'
function Recents() {
    return (
        <>
            <Box>
                <Grid container  rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
                    <Grid  >
                        <Card cardImage={cardImage}/>
                    </Grid>

                    <Grid  item md={6}  xs={12}>
                        <Card   cardImage={postImage1}/>
                    </Grid>
                    <Grid  item md={6}  xs={12}>
                        <Card   cardImage={postImage2}/>
                    </Grid>
                    <Grid  item md={6}  xs={12}>
                        <Card   cardImage={postImage3}/>
                    </Grid>
                    <Grid  item md={6}   xs={12}>
                        <Card   cardImage={postImage4}/>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Recents