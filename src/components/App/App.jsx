import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from '../../redux/Auth/operations';
import css from './App.module.css';

import SharedLayout from 'components/SharedLayout/SharedLayout';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import { RestrictedRoute } from 'components/RedirectedRoute/RedirectedRoute';

const Home = lazy(() => import('Pages/Home/Home'));
const Register = lazy(() => import('Pages/Register/Register'));
const Login = lazy(() => import('Pages/Login/Login'));
const ContactsPage = lazy(() => import('../../Pages/Contacts/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div className={css.App_wraper}>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />

            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<Register />}
                  restricted
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<Login />}
                  restricted
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<ContactsPage />}
                />
              }
            />
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer />
    </div>
  );
};
