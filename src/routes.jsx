import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./Pages/Admin/Dashboard";
import Properties from "./Pages/Admin/Properties";
import Reservations from "./Pages/Admin/Reservations";
import Users from "./Pages/Admin/Users";
import Login from "./Pages/Auth/Login";
import Logout from "./Pages/Auth/Logout";
import Register from "./Pages/Auth/Register";
import Home from "./Pages/Home"
import Hostel from "./Pages/Hostel/Show";
import ForgotPassword from "./Pages/Password/ForgotPassword";
import ResetPassword from "./Pages/Password/ResetPassword";
import EditProfile from "./Pages/Profile/EditProfile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/logout",
        element: <Logout />
    },
    {
        path: "/hostel/:hostelId",
        element: <Hostel />
    },
    {
        path: "/forgot-password",
        element: <ForgotPassword />
    },
    {
        path: "reset-password",
        element: <ResetPassword />
    },
    {
        path: "/profile",
        children: [
            {
                path: "edit",
                element: <EditProfile />
            }
        ]
    },
    {
        path: "/admin/dashboard",
        children: [
            {
                index: true,
                element: <Dashboard />
            },
            {
                path: "properties",
                element: <Properties />
            },
            {
                path: "users",
                element: <Users />
            }, 
            {
                path: "reservations",
                element: <Reservations />
            }
        ]

    }
]);

export default router;