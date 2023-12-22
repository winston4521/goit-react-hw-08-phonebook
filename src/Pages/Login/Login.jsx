import { Stack, Typography } from '@mui/material';
import LoginForm from 'components/LoginForm/LoginForm';
import React from 'react';

const Login = () => {
  return (
    <Stack spacing={2} alignItems="center">
      <Typography variant="h3" component="h1">
        Login
      </Typography>
      <LoginForm />
    </Stack>
  );
};

export default Login;
