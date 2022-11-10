import Main from "../../Layout/Main/Main";
import AddService from "../../Pages/AddService/AddService";
import Blogs from "../../Pages/Blogs/Blogs";
import Checkout from "../../Pages/Checkout/Checkout";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Orders from "../../Pages/Orders/Orders";
import Update from "../../Pages/Orders/Update";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoutes/PrivateRoutes";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/services/:id',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({ params }) => fetch(`https://delivery-services-kappa.vercel.app/services/${params.id}`)
            },
            {
                path: '/orders',
                element: <PrivateRoute> <Orders></Orders></PrivateRoute>
            }
            ,
            {
                path: '/update/:id',
                element: <PrivateRoute> <Update></Update></PrivateRoute>,
                loader: ({ params }) => fetch(`https://delivery-services-kappa.vercel.app/orders/${params.id}`)
            },
            {
                path: '/addservice',
                element: <PrivateRoute> <AddService></AddService></PrivateRoute>,

            }
        ]
    }
]);

export default router;