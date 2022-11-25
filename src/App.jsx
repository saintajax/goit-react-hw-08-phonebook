import { Route, Routes } from 'react-router';
import React, { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Layout } from 'pages/layout/Layout';
import { refresh } from 'redux/Auth/authOperations';
import PrivateRoute from 'PrivateRoute';
import PublicRoute from 'PublicRoute';
import { HomePage } from 'pages/homePage/HomePage';

const LoginPage = lazy(() => import('./pages/loginPage/Login'));
const Contacts = lazy(() => import('./pages/contacts/Contacts'));
const RegisterPage = lazy(() => import('./pages/Register/Register'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/registration"
            element={
              <PublicRoute restricted>
                <RegisterPage />
              </PublicRoute>
            }
          ></Route>
          <Route
            path="/login"
            element={
              <PublicRoute restricted>
                <LoginPage />
              </PublicRoute>
            }
          ></Route>
        </Route>
      </Routes>
    </Suspense>
  );
};
