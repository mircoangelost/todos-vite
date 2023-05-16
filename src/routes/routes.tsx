/*
  /       => HomePage
  /todos  => TodosPage
  /config => COnfigPage
  /profile=> ProfilePage
  /auth   => AuthPage
    /auth/login         => AuthLoginPage
    /auth/register      => AuthRegisterPage
    /auth/resetPassword => AuthResetPasswordPage
*/
import React, { Suspense } from "react";
import { Outlet, Routes, Route } from "react-router-dom";
import LoadingPageIndicator from "@/components/loading-page-indicator/loading-page-indicator.component";

const HomePage = React.lazy(() => import('@/pages/home/home-page'));
const LoginPage = React.lazy(() => import('@/pages/login/login-page'));
const RegisterPage = React.lazy(() => import('@/pages/register/register-page'));
const TodosPage = React.lazy(() => import('@/pages/todos/todos-page'));
const ConfigPage = React.lazy(() => import('@/pages/config/config-page'));
const NotFoundPage = React.lazy(() => import('@/pages/not-found/not-found-page'));

const AppRoutes = () => {
  const isAuthenticated = false;
  
  return (
    <Routes>
      <Route path="/" element={
        <div>
          <Outlet />
        </div>
        }>
        <Route index element={
          <Suspense fallback={<LoadingPageIndicator />}>
            <HomePage />
          </Suspense>
        } />
         <Route path="auth/login" element={
          <Suspense fallback={<LoadingPageIndicator />}>
            <LoginPage />
          </Suspense>
        } />
          <Route path="auth/register" element={
          <Suspense fallback={<LoadingPageIndicator />}>
            <RegisterPage />
          </Suspense>
        } />        
        <Route path="/todos" element={
          <Suspense fallback={<LoadingPageIndicator />}>
            <TodosPage />
          </Suspense>
          }
        />
        <Route path="/config" element={
          <Suspense fallback={<LoadingPageIndicator />}>
            <ConfigPage />
          </Suspense>
          }
        />
      </Route>
      <Route path="*" element={
        <Suspense fallback={<LoadingPageIndicator />}>
          <NotFoundPage />
        </Suspense>
        }
      />
    </Routes>
  )
};

export default AppRoutes;