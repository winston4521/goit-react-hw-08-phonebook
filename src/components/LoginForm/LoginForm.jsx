import { useDispatch } from 'react-redux';
import { logInUser } from '../../redux/Auth/operations';
import { Button, InputAdornment, Stack, TextField } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
import { useState } from 'react';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      logInUser({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Stack alignItems="center" justifyContent="center">
      <form onSubmit={handleSubmit} autoComplete="off">
        <Stack
          spacing={2}
          useFlexGap
          alignItems="center"
          justifyContent="center"
          sx={{
            backgroundColor: '#c2c7ca',
            minWidth: '280px',
            padding: '30px',
            borderRadius: '15%',
            opacity: 0.8,
            boxShadow: ' 3px 5px 5px 2px #888888',
          }}
        >
          <TextField
            type="email"
            name="email"
            label="email"
            size="small"
            value={email}
            error={!email}
            onChange={e => setEmail(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            type="password"
            name="password"
            label="password"
            size="small"
            value={password}
            onChange={e => setPassword(e.target.value)}
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

          <Button variant="contained" type="submit">
            Log In
          </Button>
        </Stack>
      </form>
    </Stack>
  );
};

export default LoginForm;
