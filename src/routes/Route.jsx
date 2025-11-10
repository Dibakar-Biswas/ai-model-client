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
import MyModels from "../pages/MyModels";
import MyPurchase from "../pages/MyPurchase";
import Error from "../pages/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://ai-manager-server.vercel.app/latest-models"),
      },
      {
        path: "/add-model",
        element: (
          <PrivateRoute>
            <AddModel></AddModel>
          </PrivateRoute>
        ),
      },
      {
        path: "/view-model",
        element: <ViewModel></ViewModel>,
        loader: () => fetch("https://ai-manager-server.vercel.app/models"),
      },
      {
        path: "/model-details/:id",
        element: (
          <PrivateRoute>
            <ModelDetails></ModelDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-models",
        element: (
          <PrivateRoute>
            <MyModels></MyModels>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-purchase",
        element: (
          <PrivateRoute>
            <MyPurchase></MyPurchase>
          </PrivateRoute>
        ),
      },
      {
        path: "/update-model/:id",
        element: (
          <PrivateRoute>
            <UpdateModel></UpdateModel>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://ai-manager-server.vercel.app/models/${params.id}`),
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
