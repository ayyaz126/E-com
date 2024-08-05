import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, InputBase, Menu, MenuItem, Toolbar, Typography, styled } from '@mui/material'
import React, { useState } from 'react'


function Navebar() {
    const StyledToolbar = styled(Toolbar)({
        display: "flex",
        justifyContent: "space-between",
    });

    const SocialBox = styled(Box)({
        display: "flex",
        gap: 10,
    })

    const MenulBox = styled(Box)({
        display: "flex",
        gap: 30,
    })

    const SearchBox = styled(Box)({
        display: "flex",
        gap: 5,
    })

    const MenuItemes = [
        { Name: "Home", Link: "/" },
        { Name: "Products", Link: "#" },
        { Name: "Protofolio", Link: "#" },
        { Name: "Blog", Link: "#" },
        { Name: "Contact", Link: "#" },
    ]
   

  const [open, SetOpen] = useState(false);
    return (
        <>
            <AppBar sx={{ backgroundColor: "black" }}  position={'static'}>
                <StyledToolbar>
                    <SocialBox>
                        <Facebook />
                        <Instagram />
                        <Twitter />
                    </SocialBox>

                    <MenulBox sx={{ display: { xs: 'none', sm: "none", md: "flex" } }}>
                        {MenuItemes.map((item) => (
                            <Typography sx={{
                                cursor: "pointer",
                                fontSize: "14px",
                            }}>
                                {item.Name}
                            </Typography>
                        ))}
                    </MenulBox>

                    <SearchBox>
                        <InputBase placeholder="Search ..." sx={{ color: "white" }} /
                        >
                        <MenuIcon sx={{
                            color: "white",
                            display: { xs: "block", sm: "block", md: "none" },
                        }}
                           onClick={() => SetOpen(!open)}
                        />
                    </SearchBox>
                </StyledToolbar> 
                              
                <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    open={open}
                    onClose={() => SetOpen(!open)}
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                    }}
                >
                    <Box sx={{ width: 250, height: "70vh" }}>
                        {MenuItemes.map((item) => (
                              <MenuItem
                              sx={{
                                cursor: "pointer",
                                fontSize: "14px",
                              }}
                            >
                              {item.Name}
                            </MenuItem>
                        ))}
                    </Box>
                </Menu>

            </AppBar>
        </>
    )
}

export default Navebar;



