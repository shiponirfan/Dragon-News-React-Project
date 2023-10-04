import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import NewsDetails from "../pages/News/NewsDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import About from "../pages/About/About";
import Career from "../pages/Career/Career";
import PrivateRoutes from "./PrivateRoutes";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <Home></Home>
            },
            {
                path: '/newsdetails/:id',
                loader: ()=> fetch('/news.json'),
                element: <PrivateRoutes><NewsDetails></NewsDetails></PrivateRoutes>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path:'/about',
                element: <About></About>
            },
            {
                path:'/career',
                element: <Career></Career>
            },
        ]
    }
])
export default routes;