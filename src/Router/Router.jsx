import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import LoginForm from "../Pages/Login/LoginForm";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      { path: "/register", element: <Register></Register> },
      { path: "/login", element: <LoginForm></LoginForm> },
    ],
  },
]);
