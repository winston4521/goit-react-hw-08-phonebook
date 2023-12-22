import React from 'react';
import { MainLink, MainNav } from './Navigation.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/Auth/selectors';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <MainNav>
      <MainLink to="/">Home</MainLink>

      {isLoggedIn && <MainLink to="/contacts">Tasks</MainLink>}
    </MainNav>
  );
};

export default Navigation;
