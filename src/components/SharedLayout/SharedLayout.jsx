import { Stack } from '@mui/material';
import { AppBarMain } from 'components/AppBarMain/AppBarMain';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <Stack spacing={10}>
      <AppBarMain />

      <Outlet />
    </Stack>
  );
};

export default SharedLayout;
