import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from '../../redux/Auth/selectors';
import { AppBar, IconButton, Stack, Toolbar } from '@mui/material';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

export const AppBarMain = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <AppBar position="static">
      <Toolbar flex-direction="row">
        <IconButton size="large" color="inherit" edge="start">
          <CatchingPokemonIcon />
        </IconButton>

        <Stack
          spacing={2}
          direction="row"
          justifyContent="space-between"
          sx={{ flexGrow: 1 }}
        >
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
