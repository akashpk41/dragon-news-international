import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import AuthLayout from "../Layouts/AuthLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },

  {
    path: "/auth",
    element: <AuthLayout />,
  },
  {
    path: "/news",
    element: <h1>News</h1>,
  },
]);
