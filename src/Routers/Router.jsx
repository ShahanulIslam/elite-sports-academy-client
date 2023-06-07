import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Shared/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      errorElement:<NotFound></NotFound> ,
      children:[
        {
          path:"/",
          element:<Home></Home>
        }
      ]
    },
  ]);

  export default router;