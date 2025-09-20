import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import AuthLayout from "../Layouts/AuthLayout";
import Home from "./Home";
import CategoryNews from "./CategoryNews";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/category/:id",
        element: <CategoryNews />,
      },
    ],
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
