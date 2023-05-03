import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import ViewDetails from "../pages/RecipeDetails/ViewDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/Error/ErrorPage";
import About from "../pages/About/About";
import Blog from "../pages/Blogs/Blog";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "view-details/:id",
        element: <PrivateRoute><ViewDetails /></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`https://chef-recipe-hunter-server-blush.vercel.app/recipe-info/${params.id}`),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
