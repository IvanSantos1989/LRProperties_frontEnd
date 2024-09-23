import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './components/Search';
import NewestDeals from './components/NewestDeals';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import HouseDetails from './pages/HouseDetails';
import About from './pages/About';
import '/src/index.css';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='w-11/12 md:w-4/5 m-auto'>
          <Search />
          <Routes>
            <Route path='/' element={<NewestDeals />} />
            <Route path='/about' element={<About />} />
            <Route path='/housedetails' element={<HouseDetails />} />
          </Routes>
          <NewestDeals />
          <AboutUs />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;