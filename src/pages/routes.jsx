import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import AuthLayout from "../Layouts/AuthLayout";
import Home from "./Home";
import CategoryNews from "./CategoryNews";
import ErrorPage from "./ErrorPage";
import Loading from "../components/Loading";

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
        loader: () => fetch("/news.json"),
        hydrateFallbackElement: <Loading />,
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
  {
    path: "/*",
    element: <ErrorPage />,
  },
]);
