import { createBrowserRouter } from "react-router-dom";
import Root from "../components/root/Root";
import LogIn from "../components/authentication/LogIn";
import Register from "../components/authentication/Register";
import Home from "../components/pages/home/Home";




export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
    //   errorElement: <ErrorPage></ErrorPage>,
      
      children: [
        {
          path: "/",
          element: <Home></Home>,
          
        },
        {
            path: "/login",
            element: <LogIn></LogIn>,
            
        },
        {
            path: "/register",
            element: <Register></Register>,
            
        },
        
      ],
    },
  ]);