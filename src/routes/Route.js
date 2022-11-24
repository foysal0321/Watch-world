import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/blog/Blog";
import Home from "../components/Home/Home";
import Main from "../lyout/Main";
import Error from "../share/error/Error";
import Signin from "../Sign/Signin";
import Signup from "../Sign/Signup";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/signup',
                element: <Signup />
            },
            {
                path: '/signin',
                element: <Signin />
            }
        ]
    }
])
 