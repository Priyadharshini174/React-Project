import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  // Regular expressions for validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email pattern
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Minimum 8 characters, at least one letter and one number

  // Handle form submission
  const handleLogin = () => {
    let isValid = true;

    // Email validation
    if (!emailRegex.test(email)) {
      setEmailError('Invalid email format');
      isValid = false;
    } else {
      setEmailError('');
    }

    // Password validation
    if (!passwordRegex.test(password)) {
      setPasswordError('Invalid password');
      isValid = false;
    } else {
      setPasswordError('');
    }

    // If all validations pass, navigate to HomePage
    if (isValid) {
      navigate('/home');
    }
  };

  return (
    <div className='img'>
      <div className='a'>
    <Box className="login-container">
      <Typography variant="h4" align="center" gutterBottom>
        Login
      </Typography>
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={!!emailError}
        helperText={emailError}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={!!passwordError}
        helperText={passwordError}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleLogin}
        style={{ marginTop: '16px' }}
      >
        Login
      </Button>
      <Typography variant="body2" align="center" style={{ marginTop: '16px' }}>
        Don't have an account? <Button className='signup-btn' style={{backgroundColor:'white'}} onClick={() => navigate('/signup')}>Sign Up</Button>
      </Typography>
    </Box>
    </div>
    </div>
  );
};

export default LoginPage;
