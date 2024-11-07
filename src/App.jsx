import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import CheckoutCard from "./Pages/CheckoutCard"
import Header from "./_Components/Header"
import Footer from "./_Components/Footer"
import Login from "./Pages/Login"
import Logout from "./Pages/Logout"
import Register from "./Pages/Register"
import { AuthContextProvider } from "./contexts/AuthContext"

function App() {

  return (
    <div>
      <AuthContextProvider>
      <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/CheckoutCard/:hostelId" element={<CheckoutCard />} />


            <Route path="/Login" element={<Login/>} />
            <Route path="/Logout" element={<Logout />} />
            <Route path="/Register" element={<Register/>} />

          </Routes>
      <Footer />
      </AuthContextProvider>     
    </div>
  )
}

export default App