import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import AddModel from "../pages/AddModel/AddModel";
import ViewModel from "../pages/ViewModel/ViewModel";

export const router = createBrowserRouter([
    {
        path: '/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/add-model',
                element:<AddModel></AddModel>
            },
            {
                path: '/view-model',
                element:<ViewModel></ViewModel>
            },
        ]
    }
])