import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/blog/Blog";
import Addproduct from "../components/dashboard/Addproduct/Addproduct";
import Allbuyer from "../components/dashboard/Allbuyer/Allbuyer";
import Allseller from "../components/dashboard/AllSeller/Allseller";
import DashMain from "../components/dashboard/DashMain.js/DashMain";
import Myorders from "../components/dashboard/Myorders/Myorders";
import Dresswatch from "../components/Home/Categori/Dress/Dresswatch";
import Sportwatch from "../components/Home/Categori/Sport/Sportwatch";
import Woodwatch from "../components/Home/Categori/Wood/Woodwatch";
import Home from "../components/Home/Home";
import DashboardLyout from "../lyout/DashboardLyout";
import Main from "../lyout/Main";
import Error from "../share/error/Error";
import Signin from "../Sign/Signin";
import Signup from "../Sign/Signup";
import PrivetRout from "./PrivetRout";

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
                path: '/dress-watchs',
                element: <Dresswatch />
            },
            {
                path: '/sport-watchs',
                element: <Sportwatch />
            },
            {
                path: '/wood-watchs',
                element: <Woodwatch />
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
    },
    {
        path:'/dashboard',
        errorElement: <Error />,
        element: <PrivetRout><DashboardLyout /></PrivetRout> ,
        children:[
            {
                path:'/dashboard',
                element: <Myorders />
            },
            {
                path:'/dashboard/add-product',
                element: <Addproduct />
            },
            {
                path:'/dashboard/all-seller',
                element: <Allseller />
            },
            {
                path:'/dashboard/all-buyer',
                element: <Allbuyer />
            },
        ]
    }
])
 