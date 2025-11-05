import type { RouteObject } from "react-router-dom";
import { PATHS } from "./paths";
import { lazy } from "react";

const AuthLayout = lazy(() => import("@/layouts/AuthLayoutPage"));
const Login = lazy(() => import("@/pages/auth/LoginPage"));
const Register = lazy(() => import("@/pages/auth/RegisterPage"));

export const authRoutesConfig: RouteObject = {
  path: PATHS.AUTH.ROOT,
  element: <AuthLayout />,
  children: [
    { path: PATHS.AUTH.LOGIN, element: <Login /> },
    { path: PATHS.AUTH.REGISTER, element: <Register /> },
  ],
};
