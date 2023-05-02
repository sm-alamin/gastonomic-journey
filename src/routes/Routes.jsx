import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Chefs from "../pages/Home/Chefs";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children:[
        {
          path: '/',
          element: <Home/>,
          loader:()=> fetch('http://localhost:5000/chef-info')
        },
        {
          path: '/chefs',
          element: <Chefs />,
          loader:()=> fetch('http://localhost:5000/chef-info')
        }
      ]
    },
  ]);

export default router;