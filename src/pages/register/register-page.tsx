import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('https://todo-service-0qq0.onrender.com/api/v1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        navigate('/todos');      
      } else if (response.status === 400) {
        // Email is already taken
        setErrorMessage('Email is already taken');
      } else {
        // Other error occurred, handle it appropriately
        setErrorMessage('Registration failed');
      }
    } catch (error) {
      // Error occurred while making the request, handle it appropriately
      setErrorMessage('Registration failed');
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
        Register Page
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
          Register
        </Button>
        <Button type='submit' variant='contained' component={Link} to='/auth/login' sx={{ mt: 2 }}>
        <ArrowBack />go back
        </Button>
      </Box>
    </Box>
  );
};

export default RegisterPage;
