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
import AdminRoute from "./AdminRote";
import InstructorRoute from "./InstructorRoute";
import SelectedClass from "../Pages/Dashboard/SelectedClass/SelectedClass";
import MyEnrolledClass from "../Pages/Dashboard/MyEnrolledClass/MyEnrolledClass";
import FeedBack from "../Pages/Dashboard/FeedBack/FeedBack";
import Payment from "../Pages/Dashboard/Payment/Payment";

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
        element: <AdminRoute><ManageUser></ManageUser></AdminRoute>,
      },
      {
        path: "manageclass",
        element: <AdminRoute><ManageClass></ManageClass></AdminRoute>
      },
      {
        path: "feedback",
        element: <AdminRoute><FeedBack></FeedBack></AdminRoute>
      },

      // Instructor Route
      {
        path: "addclass",
        element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
      },
      {
        path: "myclasses",
        element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute>
      },
      // Student Route
      {
        path:"selectedclass",
        element:<SelectedClass></SelectedClass>
      },
      {
        path:"myenrolledclass",
        element:<MyEnrolledClass></MyEnrolledClass>,
        loader: () => fetch("http://localhost:5000/enrolled-class")
      },
      {
        path:"payment",
        element:<Payment></Payment>
      }
    ]
  }
]);

export default router;