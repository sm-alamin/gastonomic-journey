import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import ViewDetails from "../pages/RecipeDetails/ViewDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children:[
        {
          path: '/',
          element: <Home/>,
        },
        {
          path: 'view-details/:id',
          element: <ViewDetails />,
          loader: ({params}) => fetch(`http://localhost:5000/recipe-info/${params.id}`)
        }
      ]
    },
  ]);

export default router;