import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AddModel from "../pages/AddModel";
import ViewModel from "../pages/ViewModel";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layout/AuthLayout";
import PrivateRoute from "./PrivateRoute";
import ModelDetails from "../pages/ModelDetails";
import UpdateModel from "../pages/UpdateModel";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:4000/latest-models')
      },
      {
        path: "/add-model",
        element: <PrivateRoute>
            <AddModel></AddModel>
        </PrivateRoute>,
      },
      {
        path: "/view-model",
        element: <ViewModel></ViewModel>,
        loader: () =>fetch('http://localhost:4000/models')
      },
      {
        path: "/model-details/:id",
        element: <PrivateRoute>
            <ModelDetails></ModelDetails>
        </PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:4000/models/${params.id}`)
      },
      {
        path: "/update-model/:id",
        element: <PrivateRoute>
            <UpdateModel></UpdateModel>
        </PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:4000/models/${params.id}`)
      },
      
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
]);
