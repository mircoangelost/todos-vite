
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { RootState } from "@/store/store";

const HomePage = () => {
  return (
    <><div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            TODOS APP
          </Typography>          
            <Button component={Link} to='/auth/login' color='inherit'>
              Login
            </Button>          
        </Toolbar>
      </AppBar>
      <Box sx={{ p: 3 }}>
        <Typography variant='h4' gutterBottom>
          Home page
        </Typography>
        <Typography variant='body1'>
          A project with react vite typescript redux todos
        </Typography>
      </Box>
    </Box>
      
    </div>     
    </>
  );
}

export default HomePage;