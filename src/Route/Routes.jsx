import { createBrowserRouter } from "react-router-dom";
import Root from "../components/root/Root";
import LogIn from "../components/authentication/LogIn";
import Register from "../components/authentication/Register";
import Home from "../components/pages/home/Home";
import ErrorPage from "../components/errorpage/ErrorPage";
import AvailableRooms from "../components/pages/rooms/AvailableRooms/AvailableRooms";
import RoomDetails from "../components/pages/rooms/roomDetails/RoomDetails";
import MyBookings from "../components/pages/mybookings/MyBookings";
import UpdateBookingInfo from "../components/pages/mybookings/UpdateBookingInfo";




export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      
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
        {
          path: "/rooms",
          element: <AvailableRooms></AvailableRooms>,
          
        },
        {
          path: "/allrooms/:id",
          element: <RoomDetails></RoomDetails>,
          
        },
        {
          path: "/myBookingsPage",
          element: <MyBookings></MyBookings>,
          
        },
        {
          path: "/updatedInfo/:id",
          element: <UpdateBookingInfo></UpdateBookingInfo>,
          
        },
        

      
        
      ],
    },
  ]);