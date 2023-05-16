import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('https://todo-service-0qq0.onrender.com/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        navigate('/todos');
      } else if (response.status === 400) {
        // user or password invalid
        setErrorMessage('Email or Password invalid');
      } else {
        setErrorMessage('login failed');
      }
    } catch (error) {
      setErrorMessage('login failed');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Typography variant='h4' gutterBottom>
        Login Page
      </Typography>
      <Box component='form' onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <TextField
          required
          label='Email'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          required
          label='Password'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errorMessage && (
          <Typography variant='body2' color='error' sx={{ mt: 1 }}>
            {errorMessage}
          </Typography>
        )}
        <Button type='submit' variant='contained' sx={{ mt: 2 }}>
          Log In
        </Button>
        <Button variant='outlined' component={Link} to='/auth/register' sx={{ mt: 2 }}>
            are you new? register here
        </Button> 
      </Box>
    </Box>
  );
};

export default LoginPage;
