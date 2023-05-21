import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/Home/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddToy from "../pages/AddToy/AddToy";
import AllToys from "../pages/AllToys/AllToys";
import SingleToy from "../pages/SingleToy/SingleToy";
import PrivateRoute from "./PrivateRoute";
import MyToy from "../pages/MyToy/MyToy";
import Blog from "../pages/Blog/Blog";
import UpdateMyToy from "../pages/UpdateMyToy/UpdateMyToy";
import ViewDetails from "../pages/Home/ViewDetails/ViewDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/addToy",
                element: <AddToy></AddToy>
            },
            {
                path: '/allToys',
                element: <AllToys></AllToys>
            },
            {
                path: 'toy/:id',
                element: <PrivateRoute><SingleToy></SingleToy></PrivateRoute>,
                loader: ({params}) => fetch(`https://toy-project-server.vercel.app/toys/${params.id}`)
            },
            {
                path: 'singleDetails/:id',
                element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
                loader: ({params}) => fetch(`https://toy-project-server.vercel.app/toys/${params.id}`)
            },
            {
                path: 'myToy',
                element: <MyToy></MyToy>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: 'updateMyToy/:id',
                element: <UpdateMyToy></UpdateMyToy>,
                loader: ({params}) => fetch(`https://toy-project-server.vercel.app/toys/${params.id}`)
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    },
]);

export default router;