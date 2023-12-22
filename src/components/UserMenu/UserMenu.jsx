import { useDispatch, useSelector } from 'react-redux';
import { Button, IconButton, Stack, Typography } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

import { logOutUser } from '../../redux/Auth/operations';

import { selectUser } from '../../redux/Auth/selectors';
import Face4Icon from '@mui/icons-material/Face4';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(selectUser);

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <IconButton>
        <Face4Icon color="secondary" size="40px" />
      </IconButton>
      <Typography variant="h6">Welcome, {name}; </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="small"
        endIcon={<LogoutIcon />}
        onClick={() => dispatch(logOutUser())}
      >
        Logout
      </Button>
    </Stack>
  );
};
