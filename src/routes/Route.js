import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Main from "../lyout/Main";
import Signin from "../Sign/Signin";
import Signup from "../Sign/Signup";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
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
 