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
import Page from "./Components/Page";
import { AuthMiddleware } from "./Components/Middleware/AuthMiddleware";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Page element={<Home />} />
    },
    {
        path: "/login",
        element: <Page element={<Login />} />
    },
    {
        path: "/register",
        element: <Page element={<Register />} />
    },
    {
        path: "/logout",
        element: 
            <AuthMiddleware>
                <Page element={<Logout />}/>
            </AuthMiddleware>
    },
    {
        path: "/hostel/:hostelId",
        element: <Page element={<Hostel />} />
    },
    {
        path: "/forgot-password",
        element: 
            <AuthMiddleware>
                <Page element={<ForgotPassword />} />
            </AuthMiddleware>
    },
    {
        path: "reset-password",
        element: 
            <AuthMiddleware>
                <Page element={<ResetPassword />} />
            </AuthMiddleware>
    },
    {
        path: "/profile",
        children: [
            {
                path: "edit",
                element: 
                    <AuthMiddleware>
                        <Page element={<EditProfile />} />
                    </AuthMiddleware>
            }
        ]
    },
    {
        path: "/admin/dashboard",
        children: [
            {
                index: true,
                element: <Page element={<Dashboard />} />
            },
            {
                path: "properties",
                element: <Page element={<Properties />} />
            },
            {
                path: "users",
                element: <Page element={<Users />} />
            }, 
            {
                path: "reservations",
                element: <Page element={<Reservations />} />
            }
        ]

    }
]);

export default router;