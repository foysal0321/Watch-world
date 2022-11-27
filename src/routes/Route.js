import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/blog/Blog";
import Addproduct from "../components/dashboard/Addproduct/Addproduct";
import Myproducts from "../components/dashboard/Addproduct/myProducts/Myproducts";
import Allbuyer from "../components/dashboard/Allbuyer/Allbuyer";
import Allseller from "../components/dashboard/AllSeller/Allseller";
import Allusers from "../components/dashboard/AllUser/Allusers";
import DashMain from "../components/dashboard/DashMain.js/DashMain";
import Myorders from "../components/dashboard/Myorders/Myorders";
import Payment from "../components/dashboard/Myorders/pament/Payment";
import Dresswatch from "../components/Home/Categori/Dress/Dresswatch";
import Sportwatch from "../components/Home/Categori/Sport/Sportwatch";
import Woodwatch from "../components/Home/Categori/Wood/Woodwatch";
import Home from "../components/Home/Home";
import DashboardLyout from "../lyout/DashboardLyout";
import Main from "../lyout/Main";
import Error from "../share/error/Error";
import Signin from "../Sign/Signin";
import Signup from "../Sign/Signup";
import Adminrout from "./Adminrout";
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
                path: '/cetagory/:ceta_id',
                element: <PrivetRout>  <Dresswatch /></PrivetRout>,
                loader: ({params})=> fetch(`http://localhost:5000/cetagory/${params.ceta_id}`)
            },         
            {
                path: '/cetagory/:categori_name',
                element: <PrivetRout>  <Dresswatch /></PrivetRout>,
                loader: ({params})=> fetch(`http://localhost:5000/products/${params.categori_name}`)
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
                path:'/dashboard/all-users',
                element: <Adminrout> <Allusers /></Adminrout>
                // <Allusers />
            },
            {
                path:'/dashboard/all-seller',
                element: <Adminrout> <Allseller /></Adminrout>
                // <Allseller />
            },
            {
                path:'/dashboard/all-buyer',
                element: <Adminrout><Allbuyer /></Adminrout>
                // <Allbuyer />
            },
            {
                path:'/dashboard/my-products',
                element:<PrivetRout><Myproducts /></PrivetRout>
                // <Allbuyer />
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment /> ,
                loader:({params})=> fetch(`http://localhost:5000/booking/${params.id}`)
            },
        ]
    }
])
 