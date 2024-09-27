import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import CheckoutCard from "./Pages/CheckoutCard"
import Header from "./_Components/Header"
import Footer from "./_Components/Footer"


function App() {


  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CheckoutCard/:CheckoutCardId" element={<CheckoutCard />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App