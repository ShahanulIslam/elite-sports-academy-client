import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layouts/Main";
import NotFound from "../Pages/NotFound/NotFound";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Registration/Register";
import Home from "../Pages/Home/Home/Home";
import AllClasses from "../Pages/AllClasses/AllClasses";
import Instructors from "../Pages/Instructors/Instructors";
import PrivateRoute from "./PrivateRoute";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      errorElement:<NotFound></NotFound> ,
      children:[
        {
          path:"/",
          element:<Home></Home>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/register",
          element:<Register></Register>
        },
        {
          path:"/allclasses",
          element:<PrivateRoute><AllClasses></AllClasses></PrivateRoute>
        },
        {
          path:"/instructors",
          element:<Instructors></Instructors>
        }
      ]
    },
  ]);

  export default router;