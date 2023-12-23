import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/Auth/operations';
import { Button, InputAdornment, Stack, TextField } from '@mui/material';
import Person4Icon from '@mui/icons-material/Person4';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(
      registerUser({
        name,
        email,
        password,
      })
    );

    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <Stack spacing={2}>
      <form onSubmit={handleSubmit} autoComplete="off">
        <Stack
          spacing={2}
          sx={{
            backgroundColor: '#c2c7ca',
            minWidth: '300px',
            padding: '40px',
            borderRadius: '10%',
            opacity: 0.9,
            boxShadow: ' 3px 5px 5px 2px #888888',
          }}
        >
          <TextField
            label="Username"
            type="text"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
            size="small"
            error={!name}
            helperText={!name && 'Required'}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Person4Icon />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            label="email"
            type="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            size="small"
            error={!email}
            helperText={!email && 'Required'}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            label="password"
            type="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            size="small"
            error={!password}
            helperText={
              password ? 'Do not share your password with anyone' : 'Required'
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PasswordIcon />
                </InputAdornment>
              ),
            }}
          />

          <Button type="submit" variant="contained">
            Register
          </Button>
        </Stack>
      </form>
    </Stack>
  );
};

export default RegisterForm;
