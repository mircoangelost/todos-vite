import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { ArrowBack, Logout, AnalyticsOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';


const LogoutNav: React.FC = () => {
    const navigate = useNavigate();


  const handleLogout = async () => {
    try {
      // Make API call to revoke user token
      await fetch('/api/https://todo-service-0qq0.onrender.com/api/v1/auth/logout', {
        method: 'POST',
      });

      // Redirect to the home page
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <AppBar position="static">
       <Toolbar>       
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Todos list
        </Typography>
        <IconButton color="inherit" onClick={handleLogout}>
          <Logout />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default LogoutNav;



