import React, {useState, useContext} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Headline from './Headline';
import { Grid } from '@mui/material';
import { navbarSx } from "./theme";
import AuthContext from '../context/AuthContext';

export default function Navbar() {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
      };

    const {logout} = useContext(AuthContext)

  return (

    <Box>
      <AppBar position="static" sx={{...navbarSx}}>
        <Toolbar disableGutters="true" sx={{padding: "0.5% 0"}}>
        <Grid container sx={{alignItems: "center", justifyContent: "space-evenly"}}>
            <Grid item xs={1} sx={{textAlign: "center"}}>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ m: 0, padding: 0}}
                  >
                  <MenuIcon />
                  </IconButton>
            </Grid>
            <Grid item xs={9}>
               <Headline />
            </Grid>
              <Grid item xs={1} sx={{textAlign: "center"}}>
                    <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleMenu}
                      color="inherit"
                      sx={{ m: 0, padding: 0}}
                    >
                      <AccountCircle />
                    </IconButton>
                    <Menu
                      id="menu-appbar"
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                    >
                      <MenuItem onClick={handleClose}>Account</MenuItem>
                      <MenuItem onClick={logout}>Logout</MenuItem>
                    </Menu>
              </Grid>

            </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}