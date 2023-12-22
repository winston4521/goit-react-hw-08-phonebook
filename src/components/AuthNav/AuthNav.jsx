import { Stack } from '@mui/material';
import { MainLink } from 'components/Navigation/Navigation.styled';

export const AuthNav = () => {
  return (
    <Stack direction="row" spacing={2}>
      <MainLink to="/register">Register</MainLink>
      <MainLink to="/login">Log In</MainLink>
    </Stack>
  );
};
