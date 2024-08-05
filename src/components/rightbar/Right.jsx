import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'
import postImage2 from "../static/image2.jpeg";
import PostImage3 from "../static/image3.jpeg"
import PostImage4 from "../static/image4.jpeg"
import Card from "../card/Card"

function Right() {
  return (
    <Box>
      <Typography align="center" bgcolor={"black"} color="white">
        Most Popular
      </Typography>
      <List
        sx={{
          width: "100%",
          height: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
        }}
      >

         <ListItem alignItems="flex-end">
          <ListItemAvatar>
            <Avatar
              sx={{ height: 80, width: 50 }}
              variant="square"
              alt="Remy Sharp"
              src={PostImage4}
            />
          </ListItemAvatar>
          <ListItemText
            secondary={" — I'll be in your neighborhood doing errands this…"}
          />
        </ListItem>

        <ListItem alignItems="flex-end">
          <ListItemAvatar>
            <Avatar
              sx={{ height: 80, width: 50 }}
              variant="square"
              alt="Remy Sharp"
              src={PostImage3}
            />
          </ListItemAvatar>
          <ListItemText
            secondary={" — I'll be in your neighborhood doing errands this…"}
          />
        </ListItem>

        <ListItem alignItems='flex-end'>
          <ListItemAvatar>
            <Avatar sx={{ height: 80, width: 50 }}
              variant="square"
              alt="Remy Sharp"
              src={postImage2} />
          </ListItemAvatar>

          <ListItemText secondary={" — I'll be in your neighborhood doing errands this…"} />
        </ListItem>
        <Divider variant='inset' component={"li"} />
      </List>
      <Typography align="center" bgcolor={"black"} color="white">
        About Us
      </Typography>
      <Card cardImage={postImage2} />
    </Box>
  )
}

export default Right