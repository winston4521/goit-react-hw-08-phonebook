import RegisterForm from 'components/RegisterForm/RegisterForm';
import React from 'react';

import { Stack, Typography } from '@mui/material';

const RegisterPage = () => {
  return (
    <Stack spacing={2} alignItems="center">
      <Typography variant="h3" component="h1">
        Register
      </Typography>
      <RegisterForm />
    </Stack>
  );
};

export default RegisterPage;
