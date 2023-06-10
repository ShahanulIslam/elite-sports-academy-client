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
import Dashboard from "../Layouts/Dashboard";
import ManageUser from "../Pages/Dashboard/ManageUser/ManageUser";
import ManageClass from "../Pages/Dashboard/ManageClass/ManageClass";
import AddClass from "../Pages/Dashboard/AddClass/AddClass";
import MyClasses from "../Pages/Dashboard/MyClasses/MyClasses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/allclasses",
        element: <AllClasses></AllClasses>
      },
      {
        path: "/instructors",
        element: <Instructors></Instructors>
      }
    ]
  },
  {
    path: "dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [

      // Admin Route
      {
        path: "manageuser",
        element: <ManageUser></ManageUser>,
      },
      {
        path: "manageclass",
        element: <ManageClass></ManageClass>
      },

      // Instructor Route
      {
        path: "addclass",
        element: <AddClass></AddClass>
      },
      {
        path:"myclasses",
        element:<MyClasses></MyClasses>
      }
    ]
  }
]);

export default router;