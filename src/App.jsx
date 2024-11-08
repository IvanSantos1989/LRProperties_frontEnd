import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Hostel from "./Pages/Hostel/Show"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Login from "./Pages/Auth/Login"
import Logout from "./Pages/Auth/Logout"
import Register from "./Pages/Auth/Register"
import { AuthContextProvider } from "./contexts/AuthContext"

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
          </Routes>
      <Footer />
      </AuthContextProvider>     
    </div>
  )
}

export default App