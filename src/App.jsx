import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Hostel from "./Pages/Hostel/Show"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Login from "./Pages/Auth/Login"
import Logout from "./Pages/Auth/Logout"
import Register from "./Pages/Auth/Register"
import { AuthContextProvider } from "./contexts/AuthContext"
import EditProfile from "./Pages/Profile/EditProfile"
import ForgotPassword from "./Pages/Password/ForgotPassword"
import ResetPassword from "./Pages/Password/ResetPassword"
import AdminDashboard from "./Pages/Admin/AdminDashboard"

function App() {

  return (
    <div>
      <AuthContextProvider>
      <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hostel/:hostelId" element={<Hostel />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/register" element={<Register/>} />
            <Route path="/profile/edit" element={<EditProfile />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Routes>
      <Footer />
      </AuthContextProvider>     
    </div>
  )
}

export default App